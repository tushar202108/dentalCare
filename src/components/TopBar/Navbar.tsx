import {
    Button,
    Drawer,
    Flex,
    Grid,
    Layout,
    Menu,
    Switch,
    theme,
} from 'antd';

import {
    CalendarOutlined,
    MenuOutlined,
    MoonOutlined,
    SunOutlined,
} from '@ant-design/icons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppointmentModal from '../form/form';
import { LINKS } from '../../constant/Link';

const { Header } = Layout;

interface NavbarProps {
    isDarkMode: boolean;
    onToggleTheme: () => void;
}

const Navbar = ({
    isDarkMode,
    onToggleTheme,
}: NavbarProps) => {
    const navigate = useNavigate();
    const screens = Grid.useBreakpoint();

    const { token } = theme.useToken();

    const [open, setOpen] = useState(false);
    const [appointmentOpen, setAppointmentOpen] =
        useState(false);

    const isMobile = !screens.md;

    const handleNavigation = (path: string) => {
        setOpen(false);

        if (path.startsWith('#')) {
            const element = document.querySelector(path);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            return;
        }

        navigate(path);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleAppointment = () => {
        setOpen(false);
        setAppointmentOpen(true);
    };

    const menuItems = [
        {
            key: 'home',
            label: 'Home',
            onClick: () =>
                handleNavigation(LINKS.HOME),
        },
        {
            key: 'about-us',
            label: 'About Us',
            onClick: () =>
                handleNavigation(LINKS.ABOUT_US),
        },
    ];

    return (
        <>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    width: '100%',

                    background:
                        token.colorBgContainer,

                    borderBottom: `1px solid ${token.colorBorderSecondary}`,

                    padding: isMobile
                        ? '0 16px'
                        : '0 40px',

                    transition:
                        'all 0.3s ease',
                }}
            >
                <Flex
                    align="center"
                    justify="space-between"
                    style={{
                        height: '100%',
                    }}
                >
                    {/* Logo */}

                    <Flex
                        align="center"
                        gap={8}
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            handleNavigation(
                                LINKS.HOME
                            )
                        }
                    >
                        <img
                            src="/icon.png"
                            height={50}
                            width={120}
                            alt="TC Dental"
                        />
                    </Flex>

                    {/* Desktop */}

                    {!isMobile ? (
                        <Flex
                            align="center"
                            gap={20}
                        >
                            <Menu
                                mode="horizontal"
                                items={menuItems}
                                selectable={false}
                                style={{
                                    borderBottom:
                                        'none',
                                    minWidth: 300,
                                    background:
                                        'transparent',
                                }}
                            />

                            {/* Theme Toggle */}

                            <Switch
                                checked={isDarkMode}
                                onChange={
                                    onToggleTheme
                                }
                                checkedChildren={
                                    <MoonOutlined />
                                }
                                unCheckedChildren={
                                    <SunOutlined />
                                }
                            />

                            {/* Appointment */}

                            <Button
                                type="primary"
                                icon={
                                    <CalendarOutlined />
                                }
                                onClick={
                                    handleAppointment
                                }
                            >
                                Book Appointment
                            </Button>
                        </Flex>
                    ) : (
                        /* Mobile */

                        <Flex
                            align="center"
                            gap={10}
                        >
                            <Switch
                                checked={
                                    isDarkMode
                                }
                                onChange={
                                    onToggleTheme
                                }
                                checkedChildren={
                                    <MoonOutlined />
                                }
                                unCheckedChildren={
                                    <SunOutlined />
                                }
                            />

                            <Button
                                type="text"
                                icon={
                                    <MenuOutlined />
                                }
                                onClick={() =>
                                    setOpen(true)
                                }
                            />
                        </Flex>
                    )}
                </Flex>

                {/* Mobile Drawer */}

                <Drawer
                    title="TC Dental"
                    placement="right"
                    open={open}
                    onClose={() =>
                        setOpen(false)
                    }
                >
                    <Menu
                        mode="vertical"
                        items={menuItems}
                        selectable={false}
                        style={{
                            border: 'none',
                        }}
                    />

                    {/* Theme */}

                    <Flex
                        justify="space-between"
                        align="center"
                        style={{
                            marginTop: 24,
                            padding: '12px 4px',
                        }}
                    >
                        <Flex
                            align="center"
                            gap={8}
                        >
                            {isDarkMode ? (
                                <MoonOutlined />
                            ) : (
                                <SunOutlined />
                            )}

                            <span>
                                {isDarkMode
                                    ? 'Dark Mode'
                                    : 'Light Mode'}
                            </span>
                        </Flex>

                        <Switch
                            checked={
                                isDarkMode
                            }
                            onChange={
                                onToggleTheme
                            }
                            checkedChildren={
                                <MoonOutlined />
                            }
                            unCheckedChildren={
                                <SunOutlined />
                            }
                        />
                    </Flex>

                    <Button
                        type="primary"
                        block
                        icon={
                            <CalendarOutlined />
                        }
                        style={{
                            marginTop: 12,
                        }}
                        onClick={
                            handleAppointment
                        }
                    >
                        Book Appointment
                    </Button>
                </Drawer>
            </Header>


            <AppointmentModal
                open={appointmentOpen}
                onClose={() =>
                    setAppointmentOpen(false)
                }
            />
        </>
    );
};

export default Navbar;