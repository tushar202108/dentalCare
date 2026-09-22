import {
    Avatar,
    Button,
    Card,
    Carousel,
    Col,
    Divider,
    Flex,
    Grid,
    Layout,
    Rate,
    Row,
    Space,
    Statistic,
    Tag,
    Typography,
    theme,
} from 'antd';

import {
    CalendarOutlined,
    CheckCircleOutlined,
    HeartOutlined,
    PhoneOutlined,
    SmileOutlined,
    StarFilled,
    UserOutlined,
    GoogleOutlined,
} from '@ant-design/icons';

import MapAddress from '../../components/AddressMap/MapAddress';
import { useState } from 'react';
import AppointmentModal from '../../components/form/form';

const { Content } = Layout;
const { Paragraph } = Typography;
const { useBreakpoint } = Grid;

function Home() {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const [appointmentOpen, setAppointmentOpen] =
        useState(false);
    const { Title, Text } = Typography;

    const { token } = theme.useToken();
    const handleAppointment = () => {
        setAppointmentOpen(true);
    };
    // =====================================================
    // SPECIALTIES
    // =====================================================

    const specialties = [
        {
            icon: <SmileOutlined />,
            title: 'General Dentistry',
            description:
                'Complete dental care for maintaining healthy teeth and gums for the whole family.',
        },
        {
            icon: <StarFilled />,
            title: 'Cosmetic Dentistry',
            description:
                'Transform your smile with modern cosmetic dental treatments designed for you.',
        },
        {
            icon: <CheckCircleOutlined />,
            title: 'Dental Implants',
            description:
                'Restore missing teeth with comfortable, natural-looking and long-lasting implants.',
        },
        {
            icon: <HeartOutlined />,
            title: 'Pediatric Dentistry',
            description:
                'Gentle and friendly dental care specially designed for children.',
        },
        {
            icon: <SmileOutlined />,
            title: 'Teeth Whitening',
            description:
                'Professional whitening treatments to give you a brighter and more confident smile.',
        },
        {
            icon: <CheckCircleOutlined />,
            title: 'Root Canal Treatment',
            description:
                'Advanced and comfortable treatment to protect and preserve damaged teeth.',
        },
    ];

    // =====================================================
    // DOCTORS
    // =====================================================

    const doctors = [
        {
            name: 'Dr. Yachna Chaudhary',
            role: 'Dentist',
            experience: '4+ Years Experience',
        },
    ];

    // =====================================================
    // PATIENT STORIES
    // =====================================================

    const patientStories = [
        {
            name: 'Saumya',
            rating: 5,
            story:
                'I have been to this clinic for tooth scaling, Cavity filling and RCT as well. I must say that Dr Yachna is the best dentist I experienced in Agra City. She is very humble and provides best dental services at very affordable price. I recommend everyone to visit her clinic for dental problems.',
        },
        {
            name: 'Dev',
            rating: 5,
            story:
                'I was nervous before my appointment, but the team made me feel completely comfortable. The results were better than I expected.',
        },
        {
            name: 'Abhishek Chaudhary',
            rating: 5,
            story: `I had an absolutely wonderful experience at the TC dental clinic. From the moment I walked in, I was impressed by the warm and welcoming atmosphere. The doctor was exceptionally kind and gentle throughout the entire appointment. They took the time to explain each step of the procedure clearly, which really put me at ease. I felt fully informed and confident in their expertise.

The results of the treatment were beyond my expectations; they were truly fantastic. Not only did the doctor address my dental concerns effectively, but the outcome was visibly impressive. I am thrilled with how everything turned out.

Overall, I highly recommend the TC dental clinic to anyone seeking professional and compassionate dental care. The combination of excellent service, clear communication, and outstanding results makes them stand out as a top choice for dental services. I look forward to my next visit knowing I'm in good hands.`,
        },
        {
            name: 'Bhagya Bulani',
            rating: 5,
            story: 'No 1 best dentist Dr in agra',
        },
        {
            name: 'Nisha Ahmad',
            rating: 5,
            story: 'Best Dental Clinic',
        },
        {
            name: 'Omkar Mate',
            rating: 5,
            story:
                'I recently visited Dr. Yachna Chaudhary at tc dental care and I must say it was a truly wonderful experience. The clinic offers high-quality dental care at affordable prices, and I was extremely satisfied with the service. I wholeheartedly recommend Dr. Yachna Chaudhary and tc dental care to anyone in need of dental care',
        },
    ];

    // =====================================================
    // WHY CHOOSE US
    // =====================================================

    const whyChooseUs = [
        {
            icon: <UserOutlined />,
            title: 'Expert Dentists',
            text:
                'Experienced dental professionals focused on your oral health.',
        },
        {
            icon: <HeartOutlined />,
            title: 'Patient First',
            text:
                'Comfortable and personalized treatment for every patient.',
        },
        {
            icon: <CheckCircleOutlined />,
            title: 'Modern Technology',
            text:
                'Advanced equipment for accurate diagnosis and treatment.',
        },
    ];

    // =====================================================
    // GOOGLE REVIEW
    // =====================================================

    const handleGoogleReview = () => {
        window.open(
            'https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVhaNU4ySXdjekZvGAo',
            '_blank',
            'noopener,noreferrer',
        );
    };

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                    background: token.colorBgLayout,
                    color: token.colorText,
                }}
            >
                <Content>

                    {/* =====================================================
                    HERO SECTION
                ===================================================== */}

                    <section
                        id="home"
                        style={{
                            background: `linear-gradient(
                            135deg,
                            ${token.colorPrimaryBg} 0%,
                            ${token.colorBgContainer} 55%,
                            ${token.colorInfoBg} 100%
                        )`,
                            padding: isMobile
                                ? '60px 20px'
                                : '90px 7%',
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <Row
                            align="middle"
                            gutter={[40, 40]}
                        >
                            {/* Hero Left */}

                            <Col xs={24} lg={13}>
                                <Space
                                    direction="vertical"
                                    size={20}
                                    style={{
                                        width: '100%',
                                    }}
                                >

                                    {/* Trusted Badge */}

                                    <Tag
                                        color="blue"
                                        style={{
                                            position: 'relative',
                                            padding: '8px 45px 8px 14px',
                                            borderRadius: 20,
                                            fontSize: 14,
                                        }}
                                    >
                                        Trusted Dental Care

                                        <img
                                            src="/badge.png"
                                            alt="Trusted badge"
                                            style={{
                                                position: 'absolute',
                                                right: 6,
                                                top: '50%',
                                                transform:
                                                    'translateY(-50%)',
                                                width: 28,
                                                height: 34,
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Tag>

                                    {/* Heading */}

                                    <Title
                                        style={{
                                            fontSize: isMobile
                                                ? 40
                                                : 60,
                                            lineHeight: 1.1,
                                            margin: 0,
                                            maxWidth: 700,
                                            color: token.colorText,
                                        }}
                                    >
                                        Your Smile,
                                        <br />

                                        <span
                                            style={{
                                                color: token.colorPrimary,
                                            }}
                                        >
                                            Our Passion.
                                        </span>
                                    </Title>

                                    {/* Description */}

                                    <Paragraph
                                        type="secondary"
                                        style={{
                                            fontSize: 18,
                                            maxWidth: 600,
                                            lineHeight: 1.8,
                                            margin: 0,
                                        }}
                                    >
                                        Experience modern, comfortable and
                                        personalized dental care for you and
                                        your entire family.
                                    </Paragraph>

                                    {/* Buttons */}

                                    <Space wrap>
                                        <Button
                                            type="primary"
                                            size="large"
                                            icon={<CalendarOutlined />}
                                            href="#appointment"
                                        >
                                            Book Appointment
                                        </Button>

                                        <Button
                                            size="large"
                                            icon={<PhoneOutlined />}
                                            href="tel:+919068728056"
                                        >
                                            Call Us
                                        </Button>
                                    </Space>

                                    {/* Statistics */}

                                    <Flex
                                        gap={30}
                                        wrap="wrap"
                                        style={{
                                            marginTop: 15,
                                        }}
                                    >
                                        <Statistic
                                            title="Years Experience"
                                            value="4+"
                                        />

                                        <Statistic
                                            title="Speciality"
                                            value="Orthodontics & implant Center"
                                        />
                                    </Flex>

                                </Space>
                            </Col>

                            {/* =================================================
                            HERO RIGHT
                        ================================================= */}

                            <Col xs={24} lg={11}>
                                <Card
                                    bordered={false}
                                    style={{
                                        borderRadius: 30,
                                        overflow: 'hidden',
                                        background:
                                            'linear-gradient(145deg, #1677ff, #69b1ff)',
                                        minHeight: isMobile
                                            ? 320
                                            : 480,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow:
                                            '0 25px 60px rgba(22,119,255,0.20)',
                                    }}
                                >
                                    <Flex
                                        vertical
                                        align="center"
                                        justify="center"
                                        gap={18}
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            width: '100%',
                                            maxWidth: 420,
                                        }}
                                    >

                                        {/* Google Icon */}

                                        <Flex
                                            align="center"
                                            justify="center"
                                            style={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: '50%',
                                                background: '#fff',
                                            }}
                                        >
                                            <GoogleOutlined
                                                style={{
                                                    fontSize: 38,
                                                    color: '#4285F4',
                                                }}
                                            />
                                        </Flex>

                                        <Title
                                            level={2}
                                            style={{
                                                color: '#fff',
                                                margin: 0,
                                            }}
                                        >
                                            Share Your Experience
                                        </Title>

                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,0.9)',
                                                fontSize: 15,
                                            }}
                                        >
                                            How was your experience with TC
                                            Dental?
                                        </Text>

                                        {/* Rating */}

                                        <Flex
                                            vertical
                                            align="center"
                                            gap={8}
                                        >
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                Your Rating
                                            </Text>

                                            <Rate
                                                value={5}
                                                character={<StarFilled />}
                                                style={{
                                                    fontSize: 32,
                                                }}
                                            />

                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontSize: 14,
                                                }}
                                            >
                                                5 / 5
                                            </Text>
                                        </Flex>

                                        {/* Google Review Button */}

                                        <Button
                                            type="primary"
                                            size="large"
                                            icon={<GoogleOutlined />}
                                            onClick={handleGoogleReview}
                                            style={{
                                                width: '100%',
                                                height: 48,
                                                borderRadius: 10,
                                                fontWeight: 600,
                                            }}
                                        >
                                            Submit Review on Google
                                        </Button>

                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,0.7)',
                                                fontSize: 12,
                                            }}
                                        >
                                            You will be redirected to Google
                                            to publish your review.
                                        </Text>

                                    </Flex>
                                </Card>
                            </Col>
                        </Row>
                    </section>

                    {/* =====================================================
                    SPECIALTIES
                ===================================================== */}

                    <section
                        id="specialties"
                        style={{
                            padding: isMobile
                                ? '60px 20px'
                                : '90px 7%',
                            background: token.colorBgContainer,
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <Row justify="center">
                            <Col
                                xs={24}
                                lg={15}
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Tag color="blue">
                                    OUR SPECIALTIES
                                </Tag>

                                <Title
                                    level={2}
                                    style={{
                                        marginTop: 15,
                                    }}
                                >
                                    Complete Dental Care
                                </Title>

                                <Paragraph
                                    type="secondary"
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    From preventive care to advanced dental
                                    treatments, our specialists provide
                                    personalized solutions for every smile.
                                </Paragraph>
                            </Col>
                        </Row>

                        <Row
                            gutter={[24, 24]}
                            style={{
                                marginTop: 45,
                            }}
                        >
                            {specialties.map((specialty) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    lg={8}
                                    key={specialty.title}
                                >
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{
                                            height: '100%',
                                            borderRadius: 20,
                                            background:
                                                token.colorBgLayout,
                                            transition:
                                                'all 0.3s ease',
                                        }}
                                        styles={{
                                            body: {
                                                padding: 28,
                                            },
                                        }}
                                    >
                                        <Avatar
                                            size={60}
                                            icon={specialty.icon}
                                            style={{
                                                background:
                                                    token.colorPrimaryBg,
                                                color:
                                                    token.colorPrimary,
                                                marginBottom: 18,
                                            }}
                                        />

                                        <Title
                                            level={4}
                                            style={{
                                                marginTop: 0,
                                            }}
                                        >
                                            {specialty.title}
                                        </Title>

                                        <Paragraph
                                            type="secondary"
                                            style={{
                                                marginBottom: 0,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {specialty.description}
                                        </Paragraph>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* =====================================================
                    WHY CHOOSE US
                ===================================================== */}

                    <section
                        style={{
                            padding: isMobile
                                ? '60px 20px'
                                : '80px 7%',
                            background: token.colorBgLayout,
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <Row justify="center">
                            <Col
                                xs={24}
                                lg={14}
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Tag color="blue">
                                    WHY CHOOSE TC DENTAL
                                </Tag>

                                <Title level={2}>
                                    Dental Care You Can Trust
                                </Title>

                                <Paragraph type="secondary">
                                    We combine experienced professionals,
                                    advanced technology and a comfortable
                                    environment to give you a better dental
                                    experience.
                                </Paragraph>
                            </Col>
                        </Row>

                        <Row
                            gutter={[24, 24]}
                            style={{
                                marginTop: 40,
                            }}
                        >
                            {whyChooseUs.map((item) => (
                                <Col
                                    xs={24}
                                    md={8}
                                    key={item.title}
                                >
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{
                                            height: '100%',
                                            textAlign: 'center',
                                            background:
                                                token.colorBgContainer,
                                            borderRadius: 20,
                                            transition:
                                                'all 0.3s ease',
                                        }}
                                    >
                                        <Avatar
                                            size={64}
                                            icon={item.icon}
                                            style={{
                                                background:
                                                    token.colorPrimaryBg,
                                                color:
                                                    token.colorPrimary,
                                                marginBottom: 15,
                                            }}
                                        />

                                        <Title level={4}>
                                            {item.title}
                                        </Title>

                                        <Paragraph type="secondary">
                                            {item.text}
                                        </Paragraph>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* =====================================================
                    PATIENT STORIES
                ===================================================== */}

                    <section
                        id="stories"
                        style={{
                            padding: isMobile
                                ? '60px 20px'
                                : '90px 7%',
                            background: token.colorBgContainer,
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <Row justify="center">
                            <Col
                                xs={24}
                                lg={15}
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Tag color="blue">
                                    PATIENT STORIES
                                </Tag>

                                <Title level={2}>
                                    What Our Patients Say
                                </Title>

                                <Paragraph type="secondary">
                                    Real experiences from patients who trusted
                                    us with their smiles.
                                </Paragraph>
                            </Col>
                        </Row>

                        <div
                            style={{
                                maxWidth: 1000,
                                margin: '40px auto 0',
                            }}
                        >
                            <Carousel
                                autoplay
                                autoplaySpeed={4500}
                                dots
                                infinite
                                centerMode
                                centerPadding={
                                    isMobile ? '20px' : '110px'
                                }
                                speed={900}
                                pauseOnHover
                            >
                                {patientStories.map((patient) => (
                                    <div key={patient.name}>
                                        <Card
                                            bordered={false}
                                            style={{
                                                background:
                                                    token.colorBgLayout,
                                                borderRadius: 25,
                                                margin: isMobile
                                                    ? '0 5px'
                                                    : '0 15px',
                                                boxShadow:
                                                    token.boxShadowSecondary,
                                                transition:
                                                    'all 0.3s ease',
                                            }}
                                        >
                                            <Flex
                                                vertical
                                                align="center"
                                                style={{
                                                    textAlign: 'center',
                                                    padding: isMobile
                                                        ? '20px 10px 25px'
                                                        : '25px 40px 30px',
                                                }}
                                            >
                                                <Avatar
                                                    size={60}
                                                    icon={<UserOutlined />}
                                                    style={{
                                                        background:
                                                            token.colorPrimary,
                                                        marginBottom: 12,
                                                    }}
                                                />

                                                <Rate
                                                    disabled
                                                    defaultValue={
                                                        patient.rating
                                                    }
                                                    character={
                                                        <StarFilled />
                                                    }
                                                    style={{
                                                        marginBottom: 12,
                                                        fontSize: 18,
                                                    }}
                                                />

                                                <Paragraph
                                                    style={{
                                                        fontSize: isMobile
                                                            ? 15
                                                            : 16,
                                                        lineHeight: 1.7,
                                                        maxWidth: 650,
                                                        marginBottom: 15,
                                                    }}
                                                >
                                                    "
                                                    {patient.story.length >
                                                        150
                                                        ? `${patient.story.slice(
                                                            0,
                                                            147,
                                                        )}...`
                                                        : patient.story}
                                                    "
                                                </Paragraph>

                                                <Title
                                                    level={5}
                                                    style={{
                                                        margin: 0,
                                                    }}
                                                >
                                                    {patient.name}
                                                </Title>
                                            </Flex>
                                        </Card>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </section>

                    {/* =====================================================
                    DOCTORS
                ===================================================== */}

                    <section
                        id="doctors"
                        style={{
                            padding: isMobile
                                ? '60px 20px'
                                : '80px 7%',
                            background: token.colorBgLayout,
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <Title
                            level={2}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            Meet Our Doctors
                        </Title>

                        <Paragraph
                            type="secondary"
                            style={{
                                textAlign: 'center',
                                marginBottom: 40,
                            }}
                        >
                            Experienced professionals dedicated to your smile.
                        </Paragraph>

                        <Row
                            gutter={[24, 24]}
                            justify="center"
                        >
                            {doctors.map((doctor) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    lg={8}
                                    key={doctor.name}
                                >
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{
                                            textAlign: 'center',
                                            borderRadius: 20,
                                            background:
                                                token.colorBgContainer,
                                        }}
                                    >
                                        <Avatar
                                            size={100}
                                            icon={<UserOutlined />}
                                            style={{
                                                background:
                                                    token.colorPrimaryBg,
                                                color:
                                                    token.colorPrimary,
                                                fontSize: 45,
                                                marginBottom: 20,
                                            }}
                                        />

                                        <Title level={4}>
                                            {doctor.name}
                                        </Title>

                                        <Tag color="blue">
                                            {doctor.role}
                                        </Tag>

                                        <div
                                            style={{
                                                marginTop: 10,
                                            }}
                                        >
                                            <Text type="secondary">
                                                {doctor.experience}
                                            </Text>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* =====================================================
                    APPOINTMENT
                ===================================================== */}

                    <section
                        id="appointment"
                        style={{
                            padding: isMobile
                                ? '60px 20px'
                                : '80px 7%',
                            background: token.colorPrimary,
                        }}
                    >
                        <Row
                            align="middle"
                            gutter={[40, 30]}
                        >
                            <Col
                                xs={24}
                                lg={15}
                            >
                                <Title
                                    level={2}
                                    style={{
                                        color: token.colorTextLightSolid,
                                        marginBottom: 10,
                                    }}
                                >
                                    Ready for a healthier smile?
                                </Title>

                                <Paragraph
                                    style={{
                                        color:
                                            token.colorTextLightSolid,
                                        opacity: 0.85,
                                        fontSize: 17,
                                    }}
                                >
                                    Schedule your dental consultation today
                                    and take the first step towards better oral
                                    health.
                                </Paragraph>
                            </Col>

                            <Col
                                xs={24}
                                lg={9}
                            >
                                <Card
                                    bordered={false}
                                    style={{
                                        borderRadius: 18,
                                        background:
                                            token.colorBgContainer,
                                    }}
                                >
                                    <Space
                                        direction="vertical"
                                        size={15}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
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

                                        <Button
                                            size="large"
                                            block
                                            icon={<PhoneOutlined />}
                                            href="tel:+919068728056"
                                        >
                                            +91-90687-28056
                                        </Button>
                                    </Space>
                                </Card>
                            </Col>
                        </Row>
                    </section>

                </Content>

                {/* =====================================================
                FOOTER
            ===================================================== */}

                <footer
                    style={{
                        background: token.colorBgElevated,
                        padding: isMobile
                            ? '50px 20px 25px'
                            : '60px 40px 30px',
                        transition: 'background 0.3s ease',
                    }}
                >
                    <Row gutter={[40, 40]}>

                        {/* Clinic */}

                        <Col
                            xs={24}
                            md={8}
                        >
                            <Title level={3}>
                                TC Dental
                            </Title>

                            <Text type="secondary">
                                Modern technology.
                                <br />
                                Gentle treatment.
                                <br />
                                Healthy smiles.
                            </Text>
                        </Col>

                        {/* Contact */}

                        <Col
                            xs={24}
                            md={8}
                        >
                            <Title level={4}>
                                Contact Us
                            </Title>

                            <Flex
                                vertical
                                gap={12}
                            >
                                <Text type="secondary">
                                    <PhoneOutlined /> +91 9068728056
                                </Text>

                                <a
                                    href="https://www.justdial.com/Agra/Tc-Dental-Care-Near-Jain-Mandir/0562PX562-X562-240721074646-N2F7_BZDET"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Text type="secondary">
                                        Find us on Justdial
                                    </Text>
                                </a>

                                <Text type="secondary">
                                    dryachnac@gmail.com
                                </Text>
                            </Flex>
                        </Col>

                        {/* Google Map */}

                        <Col
                            xs={24}
                            md={8}
                        >
                            <MapAddress />
                        </Col>

                    </Row>

                    <Divider />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <Text type="secondary">
                            © {new Date().getFullYear()} TC Dental.
                            All rights reserved.
                        </Text>
                    </div>
                </footer>
            </Layout>
            <AppointmentModal
                open={appointmentOpen}
                onClose={() =>
                    setAppointmentOpen(false)
                }
            />

        </>
    );
}

export default Home;