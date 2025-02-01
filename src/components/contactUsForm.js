import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactUsFormComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const notifySuccess = () => {
    console.log("Entered success func toat");
    toast.success("Message sent");
  };

  const notifyError = () => {
    toast.error("Failed to send message");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      // const response = await fetch("https://formsubmit.co/ajax/test@test.com", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      //   signal: controller.signal,
      // });

      // change to response.ok
      if (true) {
        notifySuccess();
        setFormData({
          name: "",
          email: "",
          phone_no: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request aborted due to timeout");
      }
      notifyError();
    } finally {
      setLoading(false);
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="contact-us-form">
      <h3>Contact US</h3>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Full Name" name="name" required>
          <Input placeholder="Enter your name." type="text" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Email address" name="email" required>
          <Input placeholder="Enter your email." type="email" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone_no" required>
          <Input placeholder="Enter your phone number." type="number" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Message" name="message" type="text">
          <TextArea
            placeholder="Maximum 200 characters allowed"
            maxLength={200}
            onChange={handleChange}
          />
        </Form.Item>
        <Button htmlType="submit">{!loading ? "Submit" : "Sending"}</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default ContactUsFormComp;
