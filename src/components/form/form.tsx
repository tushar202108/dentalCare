import { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Space,
} from 'antd';
import {
  CalendarOutlined,
  SendOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { supabase } from '../../lib/supabase';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

interface AppointmentFormValues {
  fullName: string;
  age: number;
  phoneNumber: string;
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

  const handleSubmit = async (
    values: AppointmentFormValues,
  ) => {
    try {
      setLoading(true);

      const payload = {
        name: values.fullName.trim(),
        age: values.age,
        phone: `+91${values.phoneNumber}`,
        preferredDate: values.date.format('YYYY-MM-DD'),
        preferredTime: values.time,
        reasonForVisit: values.reason.trim(),
        notificationChannel: 'whatsapp',
      };

      const { data, error } =
  await supabase.functions.invoke(
    'clever-handler',    {
      body: {
        name: values.fullName.trim(),
        age: values.age,
        phone: `+91${values.phoneNumber}`,
        preferredDate: values.date.format(
          'YYYY-MM-DD',
        ),
        preferredTime: values.time,
        reasonForVisit:
          values.reason.trim(),
        notificationChannel: 'whatsapp',
      },
    },
  );

      if (error) {
        console.error(
          'Appointment API error:',
          error,
        );

        throw new Error(
          error.message ||
            'Unable to send appointment request',
        );
      }

      if (!data?.success) {
        throw new Error(
          data?.error ||
            'Unable to create appointment',
        );
      }

      message.success(
        'Appointment request sent successfully. The clinic will confirm your appointment.',
      );

      form.resetFields();
      onClose();
    } catch (error) {
      console.error(
        'Appointment submission failed:',
        error,
      );

      message.error(
        error instanceof Error
          ? error.message
          : 'Unable to send appointment request',
      );
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
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message:
                'Please enter your full name',
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Enter your full name"
          />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message:
                'Please enter your age',
            },
            {
              type: 'number',
              min: 1,
              max: 120,
              message:
                'Please enter a valid age',
            },
          ]}
        >
          <InputNumber
            size="large"
            placeholder="Enter age"
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message:
                'Please enter your phone number',
            },
            {
              pattern: /^[0-9]{10}$/,
              message:
                'Please enter a valid 10-digit phone number',
            },
          ]}
        >
          <Input
            size="large"
            addonBefore="+91"
            placeholder="Enter 10-digit phone number"
          />
        </Form.Item>

        <Form.Item
          label="Preferred Date"
          name="date"
          rules={[
            {
              required: true,
              message:
                'Please select a date',
            },
          ]}
        >
          <DatePicker
            size="large"
            style={{ width: '100%' }}
            format="DD MMMM YYYY"
            suffixIcon={
              <CalendarOutlined />
            }
            disabledDate={(current) =>
              current.isBefore(
                dayjs().startOf('day'),
              )
            }
          />
        </Form.Item>

        <Form.Item
          label="Preferred Time"
          name="time"
          rules={[
            {
              required: true,
              message:
                'Please select a preferred time',
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select preferred time"
            options={[
              {
                label: '10:00 AM',
                value: '10:00 AM',
              },
              {
                label: '10:30 AM',
                value: '10:30 AM',
              },
              {
                label: '11:00 AM',
                value: '11:00 AM',
              },
              {
                label: '11:30 AM',
                value: '11:30 AM',
              },
              {
                label: '5:00 PM',
                value: '5:00 PM',
              },
              {
                label: '5:30 PM',
                value: '5:30 PM',
              },
              {
                label: '6:00 PM',
                value: '6:00 PM',
              },
              {
                label: '6:30 PM',
                value: '6:30 PM',
              },
              {
                label: '7:00 PM',
                value: '7:00 PM',
              },
              {
                label: '7:30 PM',
                value: '7:30 PM',
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Reason for Visit"
          name="reason"
          rules={[
            {
              required: true,
              message:
                'Please enter the reason for your visit',
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
            icon={<SendOutlined />}
          >
            Send Appointment Request
          </Button>

          <div
            style={{
              textAlign: 'center',
              color: '#888',
              fontSize: 12,
            }}
          >
            Your request will be reviewed by TC
            Dental Care before confirmation.
          </div>
        </Space>
      </Form>
    </Modal>
  );
};

export default AppointmentModal;

