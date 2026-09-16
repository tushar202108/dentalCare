import {
    Button,
    Card,
    Col,
    Flex,
    Row,
    Statistic,
    Tag,
    Typography,
    theme,
} from 'antd';

import {
    CalendarOutlined,
    CheckCircleOutlined,
    HeartOutlined,
    SafetyOutlined,
    SmileOutlined,
    TeamOutlined,
} from '@ant-design/icons';

import { useState } from 'react';
import AppointmentModal from '../../components/form/form';

const { Title, Text, Paragraph } = Typography;

const AboutUs = () => {
    const [appointmentOpen, setAppointmentOpen] = useState(false);

    // =====================================================
    // ANT DESIGN THEME
    // =====================================================

    const { token } = theme.useToken();

    // =====================================================
    // OUR VALUES
    // =====================================================

    const values = [
        {
            icon: <HeartOutlined />,
            title: 'Patient First',
            description:
                'We focus on understanding your concerns and providing comfortable, personalized dental care.',
        },
        {
            icon: <SafetyOutlined />,
            title: 'Safe & Comfortable',
            description:
                'Your comfort and safety are important to us throughout every visit and treatment.',
        },
        {
            icon: <SmileOutlined />,
            title: 'Healthy Smiles',
            description:
                'Our goal is to help you maintain a healthy, confident smile with proper dental care.',
        },
        {
            icon: <TeamOutlined />,
            title: 'Personalized Care',
            description:
                'Every patient is different, so we take an individual approach to your dental needs.',
        },
    ];

    // =====================================================
    // SERVICES
    // =====================================================

    const services = [
        'Dental Consultation',
        'Teeth Cleaning',
        'Root Canal Treatment',
        'Dental Fillings',
        'Tooth Extraction',
        'Preventive Dental Care',
    ];

    return (
        <>
            {/* =====================================================
                HERO SECTION
            ===================================================== */}

            <section
                style={{
                    background: `linear-gradient(
                        135deg,
                        ${token.colorPrimaryBg} 0%,
                        ${token.colorBgContainer} 100%
                    )`,
                    padding: '90px 24px',
                    transition: 'background 0.3s ease',
                }}
            >
                <Row
                    gutter={[48, 48]}
                    align="middle"
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    {/* Hero Content */}

                    <Col xs={24} md={14}>
                        <Flex
                            vertical
                            gap={18}
                        >
                            <Tag
                                color="blue"
                                style={{
                                    width: 'fit-content',
                                    borderRadius: 20,
                                    padding: '6px 16px',
                                    fontSize: 14,
                                }}
                            >
                                ABOUT TC DENTAL CARE
                            </Tag>

                            <Title
                                style={{
                                    margin: 0,
                                    fontSize: 'clamp(36px, 5vw, 58px)',
                                    lineHeight: 1.15,
                                }}
                            >
                                Caring for Your Smile,
                                <br />

                                <span
                                    style={{
                                        color: token.colorPrimary,
                                    }}
                                >
                                    One Patient at a Time.
                                </span>
                            </Title>

                            <Paragraph
                                type="secondary"
                                style={{
                                    fontSize: 18,
                                    lineHeight: 1.8,
                                    maxWidth: 650,
                                    margin: 0,
                                }}
                            >
                                At TC Dental Care, we believe that good dental
                                care is about more than just treating teeth.
                                It is about creating a comfortable experience
                                and helping every patient maintain a healthy,
                                confident smile.
                            </Paragraph>

                            <Button
                                type="primary"
                                size="large"
                                icon={<CalendarOutlined />}
                                style={{
                                    width: 'fit-content',
                                    marginTop: 8,
                                }}
                                onClick={() =>
                                    setAppointmentOpen(true)
                                }
                            >
                                Book an Appointment
                            </Button>
                        </Flex>
                    </Col>

                    {/* Hero Image */}

                    <Col xs={24} md={10}>
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 24,
                                overflow: 'hidden',
                                boxShadow:
                                    token.boxShadowSecondary,
                                background:
                                    token.colorBgContainer,
                                transition:
                                    'all 0.3s ease',
                            }}
                            styles={{
                                body: {
                                    padding: 0,
                                },
                            }}
                        >
                            <img
                                src="/passport.png"
                                alt="TC Dental Care"
                                style={{
                                    width: '100%',
                                    height: 400,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </Card>
                    </Col>
                </Row>
            </section>

            {/* =====================================================
                INTRODUCTION
            ===================================================== */}

            <section
                style={{
                    padding: '90px 24px',
                    background: token.colorBgContainer,
                    transition: 'background 0.3s ease',
                }}
            >
                <Row
                    gutter={[60, 40]}
                    align="middle"
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    {/* Statistics Card */}

                    <Col xs={24} md={11}>
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 20,
                                background:
                                    token.colorBgLayout,
                                transition:
                                    'background 0.3s ease',
                            }}
                        >
                            <Row gutter={[24, 32]}>
                                <Col xs={12}>
                                    <Statistic
                                        title="Patient Care"
                                        value="Personalized"
                                    />
                                </Col>

                                <Col xs={12}>
                                    <Statistic
                                        title="Dental Care"
                                        value="Complete"
                                    />
                                </Col>

                                <Col xs={12}>
                                    <Statistic
                                        title="Focus"
                                        value="Comfort"
                                    />
                                </Col>

                                <Col xs={12}>
                                    <Statistic
                                        title="Goal"
                                        value="Healthy Smiles"
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Who We Are */}

                    <Col xs={24} md={13}>
                        <Flex
                            vertical
                            gap={16}
                        >
                            <Text
                                strong
                                style={{
                                    color: token.colorPrimary,
                                    fontSize: 15,
                                    letterSpacing: 1,
                                }}
                            >
                                WHO WE ARE
                            </Text>

                            <Title
                                level={2}
                                style={{
                                    margin: 0,
                                }}
                            >
                                Your Trusted Dental Care Partner
                            </Title>

                            <Paragraph
                                type="secondary"
                                style={{
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                }}
                            >
                                TC Dental Care is dedicated to providing
                                reliable and patient-focused dental care
                                in a welcoming environment.
                            </Paragraph>

                            <Paragraph
                                type="secondary"
                                style={{
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                }}
                            >
                                From routine dental check-ups and cleaning
                                to treatments for specific dental concerns,
                                we aim to make your dental visit simple,
                                comfortable, and informative.
                            </Paragraph>

                            <Paragraph
                                type="secondary"
                                style={{
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    marginBottom: 0,
                                }}
                            >
                                We believe that regular dental care and
                                good oral hygiene are essential parts of a
                                healthy lifestyle.
                            </Paragraph>
                        </Flex>
                    </Col>
                </Row>
            </section>

            {/* =====================================================
                OUR VALUES
            ===================================================== */}

            <section
                style={{
                    padding: '90px 24px',
                    background: token.colorBgLayout,
                    transition: 'background 0.3s ease',
                }}
            >
                <Flex
                    vertical
                    align="center"
                    gap={12}
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    <Tag
                        color="blue"
                        style={{
                            borderRadius: 20,
                            padding: '5px 15px',
                        }}
                    >
                        OUR VALUES
                    </Tag>

                    <Title
                        level={2}
                        style={{
                            margin: 0,
                            textAlign: 'center',
                        }}
                    >
                        What Matters to Us
                    </Title>

                    <Paragraph
                        type="secondary"
                        style={{
                            textAlign: 'center',
                            maxWidth: 650,
                            fontSize: 16,
                        }}
                    >
                        We aim to make every visit a positive experience
                        while keeping your dental health at the center of
                        our care.
                    </Paragraph>

                    <Row
                        gutter={[24, 24]}
                        style={{
                            width: '100%',
                            marginTop: 25,
                        }}
                    >
                        {values.map((item) => (
                            <Col
                                xs={24}
                                sm={12}
                                md={6}
                                key={item.title}
                            >
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{
                                        height: '100%',
                                        borderRadius: 16,
                                        textAlign: 'center',
                                        background:
                                            token.colorBgContainer,
                                        transition:
                                            'all 0.3s ease',
                                    }}
                                >
                                    <Flex
                                        vertical
                                        align="center"
                                        gap={14}
                                    >
                                        {/* Icon */}

                                        <Flex
                                            align="center"
                                            justify="center"
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background:
                                                    token.colorPrimaryBg,
                                                color:
                                                    token.colorPrimary,
                                                fontSize: 26,
                                            }}
                                        >
                                            {item.icon}
                                        </Flex>

                                        <Title
                                            level={4}
                                            style={{
                                                margin: 0,
                                            }}
                                        >
                                            {item.title}
                                        </Title>

                                        <Text
                                            type="secondary"
                                            style={{
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.description}
                                        </Text>
                                    </Flex>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </section>

            {/* =====================================================
                DENTAL SERVICES
            ===================================================== */}

            <section
                style={{
                    padding: '90px 24px',
                    background: token.colorBgContainer,
                    transition: 'background 0.3s ease',
                }}
            >
                <Row
                    gutter={[60, 40]}
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    {/* Services Description */}

                    <Col xs={24} md={11}>
                        <Flex
                            vertical
                            gap={14}
                        >
                            <Text
                                strong
                                style={{
                                    color: token.colorPrimary,
                                    letterSpacing: 1,
                                }}
                            >
                                OUR SERVICES
                            </Text>

                            <Title
                                level={2}
                                style={{
                                    margin: 0,
                                }}
                            >
                                Dental Care for Your Everyday Needs
                            </Title>

                            <Paragraph
                                type="secondary"
                                style={{
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                }}
                            >
                                Whether you need a routine check-up or
                                treatment for a dental concern, our
                                services are designed around your
                                individual needs.
                            </Paragraph>
                        </Flex>
                    </Col>

                    {/* Services List */}

                    <Col xs={24} md={13}>
                        <Row gutter={[16, 16]}>
                            {services.map((service) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    key={service}
                                >
                                    <Card
                                        size="small"
                                        bordered
                                        style={{
                                            borderRadius: 12,
                                            background:
                                                token.colorBgContainer,
                                            transition:
                                                'all 0.3s ease',
                                        }}
                                    >
                                        <Flex
                                            align="center"
                                            gap={10}
                                        >
                                            <CheckCircleOutlined
                                                style={{
                                                    color:
                                                        token.colorPrimary,
                                                    fontSize: 18,
                                                }}
                                            />

                                            <Text strong>
                                                {service}
                                            </Text>
                                        </Flex>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}

            <section
                style={{
                    padding: '80px 24px',
                    background: token.colorPrimary,
                    transition: 'background 0.3s ease',
                }}
            >
                <Flex
                    vertical
                    align="center"
                    gap={18}
                    style={{
                        maxWidth: 800,
                        margin: '0 auto',
                        textAlign: 'center',
                    }}
                >
                    <SmileOutlined
                        style={{
                            fontSize: 42,
                            color: token.colorTextLightSolid,
                        }}
                    />

                    <Title
                        level={2}
                        style={{
                            color: token.colorTextLightSolid,
                            margin: 0,
                        }}
                    >
                        Ready to Take Care of Your Smile?
                    </Title>

                    <Paragraph
                        style={{
                            color: token.colorTextLightSolid,
                            opacity: 0.85,
                            fontSize: 17,
                            margin: 0,
                        }}
                    >
                        Get in touch with TC Dental Care and schedule
                        your dental appointment.
                    </Paragraph>

                    <Button
                        size="large"
                        icon={<CalendarOutlined />}
                        onClick={() =>
                            setAppointmentOpen(true)
                        }
                    >
                        Book an Appointment
                    </Button>
                </Flex>
            </section>

            {/* =====================================================
                APPOINTMENT MODAL
            ===================================================== */}

            <AppointmentModal
                open={appointmentOpen}
                onClose={() => setAppointmentOpen(false)}
            />
        </>
    );
};

export default AboutUs;