import React, { useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { gsap } from "gsap";
import { TextField, Button, Box, Container } from "@mui/material";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Required"),
  user_email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

function InteractiveForm() {
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1 }
    );
  }, []);

  const sendEmail = (values, resetForm) => {
    const subject = encodeURIComponent(`Portfolio message from ${values.user_name}`);
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.user_name}\nEmail: ${values.user_email}`
    );
    window.location.href = `mailto:rakshyasharma09@gmail.com?subject=${subject}&body=${body}`;
    resetForm();
  };

  return (
    <div className="pb-5">
      <h1 className="pt-10 text-5xl font-bold text-center">
        Send Me a Message
      </h1>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Formik
            initialValues={{ user_name: "", user_email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendEmail(values, resetForm);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, handleChange, values, errors, touched }) => (
              <Form ref={formRef}>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="user_name"
                    label="Your Name"
                    variant="outlined"
                    value={values.user_name}
                    onChange={handleChange}
                    error={touched.user_name && Boolean(errors.user_name)}
                    helperText={touched.user_name && errors.user_name}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="user_email"
                    label="Your Email"
                    variant="outlined"
                    value={values.user_email}
                    onChange={handleChange}
                    error={touched.user_email && Boolean(errors.user_email)}
                    helperText={touched.user_email && errors.user_email}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="message"
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button
                    ref={buttonRef}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
}

export default InteractiveForm;
