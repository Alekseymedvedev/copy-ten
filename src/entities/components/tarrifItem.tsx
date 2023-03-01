import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {Chip, Stack} from "@mui/material";
import IconTarrifCopy from "../../shared/assets/images/icons/iconTarrifCopy";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";

interface IType {
    children?: any
}

const TarrifItem: FC<IType> = ({children}) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Paper>
                    <Stack spacing={4}>
                        <span className="h1 green">Копировальщик</span>
                        <span className="h2">До 10.000$</span>
                        <p className="subHeaders white-90">
                            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                            morbi.
                            Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                            maecenas et
                            in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                        </p>
                        <Stack alignItems="center">
                            <IconTarrifCopy/>
                        </Stack>
                        <Chip label="$1000" color="warning" sx={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                        }}/>
                    </Stack>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper>
                    <Stack spacing={4}>
                        <span className="h1 green">Копировальщик</span>
                        <span className="h2">До 10.000$</span>
                        <p className="subHeaders white-90">
                            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                            morbi.
                            Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                            maecenas et
                            in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                        </p>
                        <IconTarrifCopy/>
                        <Chip label="$1000" color="warning" sx={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                        }}/>
                    </Stack>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper>
                    <Stack spacing={4}>
                        <span className="h1 green">Копировальщик</span>
                        <span className="h2">До 10.000$</span>
                        <p className="subHeaders white-90">
                            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                            morbi.
                            Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                            maecenas et
                            in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                        </p>
                        <IconTarrifCopy/>
                        <Chip label="$1000" color="warning" sx={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                        }}/>
                    </Stack>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper>
                    <Stack spacing={4}>
                        <span className="h1 green">Копировальщик</span>
                        <span className="h2">До 10.000$</span>
                        <p className="subHeaders white-90">
                            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                            morbi.
                            Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                            maecenas et
                            in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                        </p>
                        <IconTarrifCopy/>
                        <Chip label="$1000" color="warning" sx={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                        }}/>
                    </Stack>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper>
                    <Stack spacing={4}>
                        <span className="h1 green">Копировальщик</span>
                        <span className="h2">До 10.000$</span>
                        <p className="subHeaders white-90">
                            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                            morbi.
                            Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                            maecenas et
                            in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                        </p>
                        <Stack justifyContent="center">
                            <IconTarrifCopy/>
                        </Stack>
                        <Chip label="$1000" color="warning" sx={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                        }}/>
                    </Stack>
                </Paper>
            </SwiperSlide>
        </Swiper>


    );
};

export default TarrifItem;