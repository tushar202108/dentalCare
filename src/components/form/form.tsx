import { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from 'antd';
import {
  CalendarOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

interface AppointmentFormValues {
  fullName: string;
  age: number;
  date: dayjs.Dayjs;
  time: string;
  reason: string;
}

const AppointmentModal = ({
  open,
  onClose,
}: AppointmentModalProps) => {
  const [form] = Form.useForm<AppointmentFormValues>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: AppointmentFormValues) => {
    try {
      setLoading(true);

      // Replace this with the clinic's WhatsApp number
      // Country code + number, without + or spaces
      const clinicWhatsAppNumber = '9068728056';

      const message = `
Hello TC Dental Care,

I would like to book an appointment.

Patient Details:

Name: ${values.fullName}
Age: ${values.age}
Preferred Date: ${values.date.format('DD MMMM YYYY')}
Preferred Time: ${values.time}
Reason for Visit: ${values.reason}

Please confirm my appointment.

Thank you.
      `.trim();

      const whatsappUrl =
        `https://wa.me/${clinicWhatsAppNumber}` +
        `?text=${encodeURIComponent(message)}`;

      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer'
      );

      form.resetFields();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Book an Appointment"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Please enter your full name',
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Enter your full name"
          />
        </Form.Item>

        {/* Age */}
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please enter your age',
            },
            {
              type: 'number',
              min: 1,
              max: 120,
              message: 'Please enter a valid age',
            },
          ]}
        >
          <InputNumber
            size="large"
            placeholder="Enter age"
            style={{ width: '100%' }}
          />
        </Form.Item>

        {/* Date */}
        <Form.Item
          label="Preferred Date"
          name="date"
          rules={[
            {
              required: true,
              message: 'Please select a date',
            },
          ]}
        >
          <DatePicker
            size="large"
            style={{ width: '100%' }}
            format="DD MMMM YYYY"
            suffixIcon={<CalendarOutlined />}
            disabledDate={(current) =>
              current.isBefore(dayjs().startOf('day'))
            }
          />
        </Form.Item>

        {/* Time */}
        <Form.Item
          label="Preferred Time"
          name="time"
          rules={[
            {
              required: true,
              message: 'Please select a preferred time',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select preferred time"
            options={[
              { label: '10:00 AM', value: '10:00 AM' },
              { label: '10:30 AM', value: '10:30 AM' },
              { label: '11:00 AM', value: '11:00 AM' },
              { label: '11:30 AM', value: '11:30 AM' },

              
              { label: '5:00 PM', value: '5:00 PM' },
              { label: '5:30 PM', value: '5:30 PM' },
              { label: '6:00 PM', value: '6:00 PM' },
              { label: '6:30 PM', value: '6:30 PM' },
              { label: '7:00 PM', value: '7:00 PM' },
              { label: '7:30 PM', value: '7:30 PM' },
            ]}
          />
        </Form.Item>

        {/* Reason */}
        <Form.Item
          label="Reason for Visit"
          name="reason"
          rules={[
            {
              required: true,
              message: 'Please enter the reason for your visit',
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            maxLength={300}
            showCount
            placeholder="Example: Tooth pain, cleaning, root canal, consultation..."
          />
        </Form.Item>

        {/* Submit */}
        <Space
          direction="vertical"
          style={{ width: '100%' }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={loading}
            icon={<WhatsAppOutlined />}
          >
            Send Appointment Request on WhatsApp
          </Button>

          <div
            style={{
              textAlign: 'center',
              color: '#888',
              fontSize: 12,
            }}
          >
            Your appointment will be confirmed by the clinic.
          </div>
        </Space>
      </Form>
    </Modal>
  );
};

export default AppointmentModal;