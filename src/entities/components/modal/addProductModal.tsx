import React, {FC, useEffect, useState} from 'react';
import {Chip, Divider, Pagination, Stack, useMediaQuery} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import Button from "@mui/material/Button";
import IconPlay from "../../../shared/assets/images/icons/iconPlay";
import Paper from "@mui/material/Paper";
import {
    useCreateNewProductMutation,
    useGetAllAddValidateProductsQuery,
    useGetProductsBySlugQuery
} from "../../../store/API/productApi";
import {Link} from "react-router-dom";
import SimpleModal from "./simpleModal";
import PaymentModal from "./paymentModal";
import IconNewProduct from "../../../shared/assets/images/icons/iconNewProduct";
import AccountConnectionList from "../accountConnectionList";

interface IType {
    stateModal?: any;
    openModal: boolean;
    closeModal: any;
    isOPenBtn?: boolean
    isError?: boolean
}

const tariffData = [
    {
        id: 1,
        title: 'До 2.500$',
        price: '5.000₽',
        dateValid: '30 дней',
        slug: 'copier2k'
    },
    {
        id: 2,
        title: 'До 5.000$',
        price: '10.000₽',
        dateValid: '30 дней',
        slug: 'copier5k'
    },
    {
        id: 3,
        title: 'До 10.000$',
        price: '25.000₽',
        dateValid: '30 дней',
        slug: 'copier10k'
    },
    {
        id: 4,
        title: 'До 20.000$',
        price: '50.000₽',
        dateValid: '30 дней',
        slug: 'copier20k'
    },
]
const AddProductModal: FC<IType> = ({stateModal, openModal, closeModal}) => {
    const [paymentLinkId, setPaymentLinkId] = useState(0)
    const [slug, setSlug] = useState('');
    // const {data, isLoading, error} = useGetProductsBySlugQuery({slug: stateModal.slug, page: accountPage})
    const [createNewProduct, {
        data: dataPayLink,
        error: productError,
        isLoading: productLoading
    }] = useCreateNewProductMutation()
    const mediaQuery = useMediaQuery('(min-width:980px)');
    const [open, setOpen] = useState(false)
    const [openPaymentModal, setOpenPaymentModal] = useState(false)
    const [openVideoModal, setOpenVideoModal] = useState(false)
    const [visibleText, setVisibleText] = useState(true)

    const [tariff, setTariff] = useState(0)
    const [forexAccountData, setForexAccountData] = useState({id: 0, login: ''});

    const [step, setStep] = useState(1);

    useEffect((() => {
        setPaymentLinkId(dataPayLink ? dataPayLink?.data?.id : 0)
        setOpen(openModal)
    }), [open, openModal, dataPayLink])

    // const handleChangeAccountPPage = (event: React.ChangeEvent<unknown>, value: number) => {
    //     setAccountPPage(value);
    // };

    const handlerClose = () => {
        closeModal(false)
        setOpen(false)
        setStep(1)
    };
    const createProduct = () => {
        createNewProduct({
            body: {
                forex_account_id: forexAccountData.id
            },
            slug
        }).then(() => setOpenPaymentModal(true))
    };

    return (
        <>
            <Modal open={open} onClose={handlerClose}>
                <Box sx={{maxWidth: 780}}>
                    <Stack onClick={handlerClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Продукт</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {
                        (step === 1) ?
                            <>
                                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}
                                       justifyContent="space-between"
                                       sx={{mb: 14}}>
                                    <Stack>
                                        <Stack
                                            spacing={7}
                                            sx={
                                                visibleText ?
                                                    {
                                                        maxHeight: 300,
                                                        maxWidth: 460,
                                                        background: `linear-gradient(180deg, #D9D9D9 41.15%, rgba(217, 217, 217, 0) 100%)`,
                                                        backgroundClip: 'text',
                                                        textFillColor: 'transparent'
                                                    } :
                                                    {
                                                        maxWidth: 460,
                                                        color: '#BDBDBD'
                                                    }
                                            }
                                        >
                                            <p>
                                                CopyTen - инновационный инструмент, который позволяет собрать свой
                                                портфель
                                                из нескольких трейдеров и выделить на каждого часть своего депозита.
                                                Это помогает снизить риск при неудачной торговле одного трейдера и
                                                сохранить
                                                средства.
                                            </p>
                                            <p>
                                                Гибкие настройки инструмента позволяют детально настроить копирование от
                                                каждого трейдера, что помогает увеличить прибыль и снизить риски.
                                            </p>
                                            <p>
                                                CopyTen предлагает несколько тарифов, которые зависят от размера вашего
                                                депозита. Вы можете выбрать тариф, который наиболее подходит для ваших
                                                инвестиционных потребностей:
                                            </p>
                                            <p>
                                                - CopyTen 2000$ - 1000р. в месяц;
                                                - CopyTen 5000$ - 1800р. в месяц;
                                                - CopyTen 10000$ - 3000р. в месяц;
                                                - CopyTen 20000$ - 6000р. в месяц.
                                            </p>
                                            <p>
                                                Станьте риск менеджером и используйте CopyTen для эффективного
                                                управления
                                                своими инвестициями.
                                            </p>
                                        </Stack>
                                        {
                                           visibleText &&
                                            <Button onClick={() => setVisibleText(false)} color="neutral">
                                                Читать подробнее
                                            </Button>
                                        }

                                    </Stack>
                                    <Stack spacing={7}>
                                        <img src={stateModal.image} alt="Копировальщик"/>
                                        <Button onClick={() => setOpenVideoModal(true)} color="error"
                                                startIcon={<IconPlay/>}>
                                            Посмотреть презентацию
                                        </Button>
                                    </Stack>

                                </Stack>

                                <Button
                                    fullWidth
                                    onClick={() => setStep(2)}
                                    color="neutral"
                                    startIcon={<IconNewProduct/>}
                                    sx={{height: 48, justifyContent: 'flex-start', color: '#BDBDBD', fontSize: 16}}
                                >
                                    Перейти к тарифам
                                </Button>
                            </>
                            : (step === 2) ?
                                <Stack spacing={7}>
                                    <Stack className="h2">Выберите тариф для продукта</Stack>
                                    {
                                        tariffData.map(item =>
                                            <Paper
                                                key={item.id}
                                                onClick={() => {
                                                    setSlug(item.slug)
                                                    setTariff(item.id)
                                                }}
                                                sx={{
                                                    borderColor: tariff === item.id ? '#6FCF97' : '',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <Stack direction="row" justifyContent="space-between" alignItems="center"
                                                       spacing={14}>
                                                    <Stack className="h2" direction="row">
                                                        <span className="green">CopyTen&nbsp;</span>
                                                        <span className="white-100">{item.title}</span>
                                                    </Stack>
                                                    <Stack direction="row" justifyContent="space-between"
                                                           alignItems="center" spacing={14}>
                                                        <Stack alignItems="center" sx={{ml: 'auto'}}>
                                                            <span className="white-90 subHeaders">Цена</span>
                                                            <span className="subHeadersBold yellow">{item.price}</span>
                                                        </Stack>
                                                        <Divider orientation="vertical" flexItem/>
                                                        <Stack alignItems="center">
                                                            <span className="white-90 subHeaders">Дата валидности</span>
                                                            <span
                                                                className="subHeadersBold white-100">{item.dateValid}</span>
                                                        </Stack>
                                                        <Chip
                                                            variant="outlined"
                                                            label={tariff === item.id ? "Выбрано" : "Выбрать"}
                                                            color={tariff === item.id ? "success" : "neutral"}
                                                        />
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                        )
                                    }
                                </Stack>
                                : (step === 3) ?

                                    <AccountConnectionList setForexAccountData={setForexAccountData}/>

                                    : (step === 4) ?
                                        productError ? 'ошибка при добавлении'
                                            :
                                            <Stack className="h2 white-100" spacing={14}>
                                                <span>
                                                    <span>Вы хотите подключить продукт</span>
                                                    <span
                                                        className="yellow">&nbsp;{stateModal.name} {stateModal.priceTitle}&nbsp;</span>
                                                    <span>на счет</span>
                                                    <span className="blue">&nbsp;{forexAccountData.login}</span>
                                                </span>
                                                <span>
                                            <span>Сумма заказа:</span>
                                            <span className="green">&nbsp;{stateModal.price}</span>
                                        </span>
                                            </Stack>
                                        : null
                    }
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>

                        {
                            (step === 1) ?
                                <Button onClick={handlerClose} color="neutral">Отмена</Button>
                                :
                                <Button onClick={() => setStep(step - 1)} color="neutral">Назад</Button>
                        }

                        {
                            (step === 2) ?
                                <Button disabled={slug === ''} onClick={() => setStep(step + 1)}
                                        color="success">Продолжить</Button>
                                : (step === 3) ?
                                    <Button onClick={createProduct} color="success">Создать заказ</Button>
                                    :
                                    (step === 4) ?
                                        <Button
                                            onClick={handlerClose}
                                            color="success"
                                            component={Link} target="_blank" to="/trader-dashboard"
                                        >Подтвердить и оплатить</Button>
                                        :
                                        null
                        }
                        {/*{*/}
                        {/*    productError &&*/}
                        {/*    <SimpleModal title="Ошибка при добавлении продукта" openModal={true} closeModal={setOpenModal}/>*/}
                        {/*}*/}

                    </Stack>

                </Box>
            </Modal>
            {
                <SimpleModal openModal={openVideoModal} closeModal={setOpenVideoModal} title="Смотреть видео">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VBpmbqTi86Y"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </SimpleModal>
            }

            {
                (openPaymentModal && dataPayLink) &&
                <PaymentModal stateModal={stateModal} paymentLinkId={paymentLinkId} openModal={openPaymentModal}
                              closeModal={setOpenPaymentModal}/>
            }

        </>
    );
}

export default AddProductModal;