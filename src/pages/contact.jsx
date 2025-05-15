import React, { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #0b1320;
  color: white;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FormSection = styled.form`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #6ce0ff;
  margin: 12px 0 6px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  padding: 14px;
  font-size: 20px;
  border: 2px solid #6ce0ff;
  background-color: transparent;
  color: white;
  border-radius: 15px;
  outline: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 14px;
  font-size: 20px;
  font-weight: 700;
  color: #6ce0ff;
  background: transparent;
  border: 2px solid #6ce0ff;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #6ce0ff;
    color: #0b1320;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PurpleButton = styled(Button)`
  color: #fff;
  border: 2px solid #8a3ca6;
  background: #8a3ca6;

  &:hover {
    background: #a259c4;
    border-color: #a259c4;
    color: #fff;
  }
`;

const Note = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #ccc;
`;

const InfoSection = styled.div`
  flex: 1;
  border-left: 2px solid #6ce0ff;
  padding-left: 40px;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 2px solid #6ce0ff;
    padding-left: 0;
    padding-top: 20px;
  }
`;

const InfoText = styled.p`
  margin-bottom: 16px;
  line-height: 1.6;
  color: #f1f1f1;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 768px) {
    /* font-size: 1rem; */
  }
`;

const AccountDetails = styled.div`
  margin: 20px 0;
`;

const RemainingSlot = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: #39aaff;

  @media (max-width: 768px) {
    /* font-size: 1.3rem; */
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "",
    camps: ""
  });
  const [notification, setNotification] = useState({
    message: "",
    success: false,
    show: false,
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setFormData({ name: "", phone: "", camps: "" });
  };

  const Submit = (e) => {
    e.preventDefault();
    setSending(true);
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzvEb9jCbpSkVyCGhYxF9GtNj0QldJfwt4jDSlFYx8rd82lzTeOw3jblCEa2CEGRrqm/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        reset();
        setNotification({
          message: "Formunuz başarılı bir şekilde gönderildi!",
          success: true,
          show: true,
        });
        setTimeout(() => {
          setNotification({ show: false });
        }, 3000);
        setSending(false);
      })
      .catch((error) => {
        setNotification({
          message: "Formu gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
          success: false,
          show: true,
        });
        setSending(false);
      });
  };

  return (
    <PageWrapper>
      <PageTitle>Ödeme Sayfası</PageTitle>
      <ContentContainer>
        <div>
          <FormSection onSubmit={Submit}>
            <Label htmlFor="name">Ad / Soyad</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Adınızı girin"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <Label htmlFor="phone">Tel No:</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="Telefon numaranız"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <Label htmlFor="camps">Hangi Kamplara Katılıyorsunuz?</Label>
            <Input
              type="text"
              name="camps"
              id="camps"
              placeholder="AYT Matematik ve geometri"
              required
              value={formData.camps}
              onChange={handleChange}
            />

            <Button type="submit" disabled={sending}>
              {sending ? "Gönderiliyor..." : "Başvur"}
            </Button>

            <Note>
              *Bu bilgiler ödeme işleminizi kontrol ederken ve kamp WhatsApp
              grubuna eklenme süreçlerinizde kullanılacaktır.
            </Note>
          </FormSection>

          <PurpleButton
            type="button"
            onClick={() => window.open('https://www.shopier.com/xakademi_xyz', '_blank')}
            style={{ marginTop: '20px', width: '100%' }}
          >
            Shopier Üzerinden Satın Al
          </PurpleButton>
        </div>

        <InfoSection>
          <InfoText>
            Her bir kampın tek başına ücreti 800₺'dir.
          </InfoText>
          <InfoText>
            Başvurunuzu yaptıktan sonra aşağıdaki hesaba katılmak istediğiniz 
            kampların ücretini göndermeniz gerekmektedir.
            Ödemesi yapılmayan başvurular otomatik olarak yok sayılmaktadır.
          </InfoText>
          <InfoText>
            Shopier üzerinden satın alım yaptığınız takdirde buradan bir işlem
            yapmanıza gerek yoktur.
          </InfoText>
          <AccountDetails>
            <InfoText>
              <strong>Hesap Sahibi:</strong> MUSTAFA OCAK
            </InfoText>
            <InfoText>
              <strong>IBAN:</strong> TR470020500009728730500004
            </InfoText>
          </AccountDetails>
        </InfoSection>
      </ContentContainer>

      {notification.show && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: notification.success ? "#4caf50" : "#f44336",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {notification.message}
        </div>
      )}
    </PageWrapper>
  );
};

export default Contact;
