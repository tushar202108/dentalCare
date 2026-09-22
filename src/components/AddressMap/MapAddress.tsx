import { Card, Flex, Typography } from 'antd';
import {
  EnvironmentOutlined,
} from '@ant-design/icons';

const { Text, Title } = Typography;

const MapAddress = () => {
  const address =
    'Shop no. 05, near Jain mandir, Gange Gauri Bagh, Balkeshwar Colony, Kamla Nagar, Agra, Uttar Pradesh 282005';

  const googleMapsUrl =
    'https://www.google.com/maps/place/Tc+dental+care/@27.2171878,77.9998124,14z/data=!4m10!1m2!2m1!1sShop+no.+05,+near+Jain+mandir,+Gange+Gauri+Bagh,+Balkeshwar+Colony,+Kamla+Nagar,+Agra,+Uttar+Pradesh+282005!3m6!1s0x397471576d623559:0xfa7f57ee45a9ef7a!8m2!3d27.2191329!4d78.028751!15sCmtTaG9wIG5vLiAwNSwgbmVhciBKYWluIG1hbmRpciwgR2FuZ2UgR2F1cmkgQmFnaCwgQmFsa2VzaHdhciBDb2xvbnksIEthbWxhIE5hZ2FyLCBBZ3JhLCBVdHRhciBQcmFkZXNoIDI4MjAwNZIBB2RlbnRpc3TgAQA!16s%2Fg%2F11vy7b0s1h?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D';

  const mapEmbedUrl =
    'https://www.google.com/maps?q=27.2191329,78.028751&z=17&output=embed';

  return (
    <Flex
      vertical
      gap={16}
      style={{
        width: '100%',
      }}
    >
      <Flex
        vertical
        gap={8}
      >
        <Title
          level={4}
          style={{
            color: '#fff',
            margin: 0,
          }}
        >
          Visit Our Clinic
        </Title>

        <Flex
          align="flex-start"
          gap={8}
        >
          <EnvironmentOutlined
            style={{
              color: '#1677ff',
              fontSize: 18,
              marginTop: 3,
            }}
          />

          <Text
            style={{
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            {address}
          </Text>
        </Flex>
      </Flex>

      <Card
        styles={{
          body: {
            padding: 0,
          },
        }}
        style={{
          overflow: 'hidden',
          borderRadius: 12,
          border: 'none',
        }}
      >
        <iframe
          title="TC Dental Care Location"
          src={mapEmbedUrl}
          width="100%"
          height="220"
          style={{
            border: 0,
            display: 'block',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Card>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#1677ff',
          fontWeight: 500,
        }}
      >
        <Flex align="center" gap={8}>
          <EnvironmentOutlined />
          Open in Google Maps
        </Flex>
      </a>
    </Flex>
  );
};

export default MapAddress;