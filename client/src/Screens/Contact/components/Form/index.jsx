import React, { useCallback, useMemo, useContext } from "react";

import { FormattedMessage, useIntl } from "react-intl";
import {
  StyledMainContainer,
  StyledForm,
  StyledImageContainer,
  StyledTitle,
  StyledButtonContainer,
} from "../../styled-components";
import { FadeIn } from "../../../../components/ImageSlider/animations";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { Form } from "semantic-ui-react";
import Select from "../../../../components/Select";
import TextArea from "../../../../components/TextArea";
import { Context } from "../../../../components/LenguageWrapper";
import { optionsHandler, BACKGROUND_IMAGES } from "../../constants";
import { errorsFormHandler } from "../../../../utils";
import ErrorMessage from "../../../../components/ErrorMessage";

export default function ContactForm({
  values,
  handleChange,
  errors,
  handleSubmit,
  setFieldValue,
}) {
  console.log(errors);
  const intl = useIntl();
  const context = useContext(Context);

  const handleFormSubmit = useCallback(
    (e, lenguage) => {
      setFieldValue("lenguage", lenguage);
      e.preventDefault();

      !errorsFormHandler(errors) && handleSubmit();
    },
    [errors, handleSubmit]
  );
  const handlerSelectOptions = useMemo(() => {
    return optionsHandler(intl);
  }, [intl]);
  const handleSubjectChange = (e, data) => {
    let value = data.options.find((option) => option.value === data.value);
    setFieldValue(data.name, value.text);
  };

  return (
    <FadeIn duration="1s">
      <StyledMainContainer>
        <StyledForm>
          <StyledTitle>
            <FormattedMessage id="contact.title" />
          </StyledTitle>
          <Form onSubmit={(e) => handleFormSubmit(e, context.locale)}>
            <Form.Group widths={2}>
              <Input
                type="text"
                placeholder="contact.inputName"
                values={values.clientName}
                handleChange={handleChange}
                errors={errors.clientName}
                id="clientName"
              />
              <Input
                type="email"
                placeholder="contact.inputEmail"
                values={values.email}
                handleChange={handleChange}
                errors={errors.email}
                id="email"
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Input
                type="text"
                placeholder="contact.inputCountry"
                values={values.country}
                handleChange={handleChange}
                errors={errors.country}
                id="country"
              />
              <Input
                type="text"
                placeholder="contact.inputCity"
                values={values.city}
                handleChange={handleChange}
                errors={errors.city}
                id="city"
              />
            </Form.Group>
            <Form.Group>
              <Input
                type="text"
                placeholder="contact.inputArtData"
                values={values.artworkData}
                handleChange={handleChange}
                errors={errors.artworkData}
                id="artworkData"
              />
            </Form.Group>
            <Form.Group>
              <Select
                placeholder="contact.inputSubject"
                options={handlerSelectOptions}
                values={values.subject}
                handleChange={(e, value) => handleSubjectChange(e, value)}
                errors={errors.subject}
                id="subject"
                name="subject"
              />
            </Form.Group>
            <Form.Group>
              <TextArea
                type="text"
                placeholder="contact.inputMessage"
                width={16}
                values={values.message}
                handleChange={handleChange}
                errors={errors.message}
                id="message"
              />
            </Form.Group>
            {!!Object.keys(errors).length && (
              <ErrorMessage errorMessage="form.requiredFields" />
            )}
            <StyledButtonContainer>
              <Button
                label="contact.send"
                type="submit"
                variant={
                  !errorsFormHandler(errors) ? "neutral" : "neutralDisabled"
                }
              />
            </StyledButtonContainer>
          </Form>
        </StyledForm>
        <StyledImageContainer img={BACKGROUND_IMAGES.CONTACT} />
      </StyledMainContainer>
    </FadeIn>
  );
}
