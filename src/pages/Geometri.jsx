import styled from "styled-components";
import banner from "../public/banner.png";
import icon1 from "../public/image-1.jpg";
import icon2 from "../public/image-2.jpg";
import icon3 from "../public/image-3.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Wrap = styled.div`
  padding: 50px;
  background: #000000;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: ${({ $second }) => ($second ? "48px" : "64px")};
  margin: 0;
  animation: fadeInDown 0.6s ease-in-out both;
  font-family: "Poppins", sans-serif;
  line-height: 64px;

  @media (max-width: 440px) {
    font-size: 36px;
    line-height: 36px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
  margin: 150px 0px 200px 0;
  align-items: center;
  justify-content: center;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 40px;
  }
`;

const WrapImg = styled.div`
  animation: fadeInRight 0.8s ease-in-out both;

  > img {
    width: 650px;
    aspect-ratio: 5/3;
    border-radius: 35px;
    box-shadow: 20px 20px 50px 30px #4a1a5c;
  }

  @media (max-width: 1250px) {
    > img {
      width: 520px;
    }
  }

  @media (max-width: 440px) {
    > img {
      width: 390px;
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  padding: 18px 24px;
  background: linear-gradient(#6a2d8a, #8a3ca6);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    background: linear-gradient(#8a3ca6, #9d4db8);
  }

  @media (max-width: 440px) {
    padding: 10px 18px;
  }

  animation: fadeInUp 0.5s ease-in-out both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Button2 = styled.button`
  padding: 18px 24px;
  background: linear-gradient(#4a1a5c, #6a2d8a);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    background: linear-gradient(#6a2d8a, #8a3ca6);
  }

  @media (max-width: 440px) {
    padding: 10px 18px;
    margin-bottom: 10px;
  }

  animation: fadeInUp 0.5s ease-in-out both;
`;

const WrapDetailContent = styled.div`
  animation: fadeIn 0.8s ease-in-out both;

  > span {
    font-size: 40px;
  }
  > h3 {
    font-size: 40px;
  }

  @media (max-width: 440px) {
    > span {
      font-size: 20px;
    }
    > h3 {
      font-size: 20px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WrapDetailContent2 = styled.div`
  animation: fadeInLeft 0.8s ease-in-out both;

  > img {
    width: 80px;
    filter: hue-rotate(110deg) saturate(300%) brightness(90%);
  }
  > h3 {
    font-size: 40px;
  }

  @media (max-width: 440px) {
    > img {
      width: 40px;
    }
    > h3 {
      font-size: 20px;
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Detail1 = styled.div`
  text-align: center;
  animation: fadeIn 1s ease-in-out both;

  @media (max-width: 440px) {
    > span {
      font-size: 14px;
    }
    > h3 {
      font-size: 20px;
      line-height: 1.4;
      max-width: 100%;
      padding: 0 20px;
    }
  }
`;

const DescriptionText = styled.h3`
  color: #fff;
  font-size: 32px;
  line-height: 1.5;
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const Detail2 = styled.div`
  text-align: center;
  margin-block: 100px;
  animation: fadeIn 1s ease-in-out both;
`;

const Geometri = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    window.location.href = "https://www.shopier.com/xakademi_xyz";
  };

  const hanldeScroll = () => {
    const id = document.getElementById("detail");
    if (id) {
      id.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data2 = [
    {
      icon: icon1,
      text: "Geometriye dair bilmen gereken bütün formül ve bilgileri öğreneceksin.",
    },
    {
      icon: icon2,
      text: "Derece öğrencisi gözünden çıkmışların çözümünü görecek ve bakış açını geliştireceksin.",
    },
    {
      icon: icon3,
      text: "Feynman Tekniğini uygulayarak konulara ve sorulara hükmeder hale geleceksin.",
    },
  ];
  return (
    <Wrap>
      <Navbar />
      <Container>
        <div>
          <Title style={{ color: "#8a3ca6" }}>TYT - AYT Geometri</Title>
          <Title>Fulleme Kampı</Title>
          <p style={{ maxWidth: "400px" }}>
            Geometri temelin az biraz olanlarla, bu kampta TYT - AYT Geometride
            20 sorunun 20'sini de çözebilecek hale gelecek ve son düzlükte
            netlerini artıracaksın.
          </p>
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginBlock: "18px",
            }}
          >
            <Button onClick={() => window.location.href = "https://www.shopier.com/xakademi_xyz"}>Kampa Katıl</Button>
            <Button2 onClick={hanldeScroll}>Müfredatı Gör</Button2>
          </div>
        </div>
        <WrapImg>
          <img src={banner} />
        </WrapImg>
      </Container>
      <Detail1 id="detail">
        <Title $second={true} style={{ color: "#8a3ca6" }}>
        Kamp Tarihi: 12 Haziran 2025, Saat: 16:00
        </Title>
        <span
          style={{
            color: "#8a3ca6",
            marginBottom: "20px",
            marginTop: "15px",
            display: "block",
          }}
        >
          Kamp yaklaşık olarak 4 saat sürecektir.
        </span>
        <DescriptionText>
          Bu kampta TYT - AYT Geometri'nin tamamını kapsayan bir konu anlatımı yapacağız. Detay formüllerle değil, derece öğrencisi mantığıyla çalışacağız. Her konu için çıkmış soruları Feynman Tekniği ile çözerek, konuların zor olmadığını ve soruların yapılabilir olduğunu göstereceğiz.
        </DescriptionText>
        <Button onClick={() => window.location.href = "https://www.shopier.com/xakademi_xyz"} style={{ marginBlock: "20px" }}>
          Kampa Katıl
        </Button>
      </Detail1>
      <Detail2>
        {data2.map(({ icon, text }, id) => {
          return (
            <WrapDetailContent2
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                marginBottom: "20px",
              }}
            >
              <img src={icon} />
              <h3
                style={{
                  color: "#fff",
                  margin: "0",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                {text}
              </h3>
            </WrapDetailContent2>
          );
        })}
        <Button onClick={() => window.location.href = "https://www.shopier.com/xakademi_xyz"} style={{ marginBlock: "20px" }}>
          Kampa Katıl
        </Button>
      </Detail2>
    </Wrap>
  );
};

export default Geometri; 