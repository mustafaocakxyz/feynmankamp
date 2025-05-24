import styled from "styled-components";
import banner from "../public/banner.jpg";
import icon1 from "../public/image-1.jpg";
import icon2 from "../public/image-2.jpg";
import icon3 from "../public/image-3.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Wrap = styled.div`
  padding: 50px;
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
  margin: 100px 0px 200px 0;
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
    box-shadow: 20px 20px 50px 30px #1e3fb9;
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
  background: linear-gradient(#80e5f0, #fff);
  border: none;
  border-radius: 30px;
  color: black;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    background: linear-gradient(#5fd4e8, #e0f7ff);
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
  background: linear-gradient(#260f69, #1e41ba);
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
    background: linear-gradient(#372087, #254de0);
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
  }
`;

const Detail2 = styled.div`
  text-align: center;
  margin-block: 100px;
  animation: fadeIn 1s ease-in-out both;
`;

const AYTMatematik = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    window.location.href = "/contact";
  };

  const hanldeScroll = () => {
    const id = document.getElementById("detail");
    if (id) {
      id.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = [
    {
      order: "1.Gün -",
      text: "Trigonometri I - II (+Çıkmış Çözümü)",
    },
    {
      order: "2.Gün -",
      text: "Log & Diziler + Limit & Süreklilik (+Çıkmış Çözümü)",
    },
    {
      order: "3.Gün -",
      text: "Türev & İntegral (+Çıkmış Çözümü)",
    },
  ];
  const data2 = [
    {
      icon: icon1,
      text: "Her sene garanti çıkan konuları pekiştirerek +15 net kazanacaksın.",
    },
    {
      icon: icon2,
      text: "Konuları derece öğrencisinden öğrenecek ve derece öğrencisi gözünden çıkmışları çözeceksin.",
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
          <Title style={{ color: "#36B7FF" }}>AYT Matematik</Title>
          <Title>Sağlamlaştırma</Title>
          <Title>Kampı</Title>
          <p style={{ maxWidth: "400px" }}>
            AYT Matematiğin en çok çıkan konularını derece öğrencisinden dinle,
            Feynman Tekniği ile pekiştir ve bütün çıkmış soruları derece
            öğrencisiyle birlikte çözerek +15 neti garantiye al!
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
            <Button onClick={() => navigate('/contact')}>Kampa Katıl</Button>
            <Button2 onClick={hanldeScroll}>Müfredatı Gör</Button2>
          </div>
        </div>
        <WrapImg>
          <img src={banner} />
        </WrapImg>
      </Container>
      <Detail1 id="detail">
        <Title $second={true} style={{ color: "#36B7FF" }}>
          Kamp Başlangıç Tarihi: 31 Mayıs 2025
        </Title>
        <span
          style={{
            color: "#36B7FF",
            marginBottom: "20px",
            marginTop: "15px",
            display: "block",
          }}
        >
          Kamp 31 Mayıs günü başlayacak olup her gün ikindi saatlerinde (15.00 - 17.00) online olarak gerçekleşecektir. Bu bilgi değişebilir.
        </span>
        {data.map(({ order, text }, id) => {
          return (
            <WrapDetailContent
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#7FE4F0" }}>{order}</span>
              <h3 style={{ color: "#fff", margin: "0" }}>{text}</h3>
            </WrapDetailContent>
          );
        })}
        <Button onClick={() => navigate('/contact')} style={{ marginBlock: "20px" }}>
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
        <Button onClick={() => navigate('/contact')} style={{ marginBlock: "20px" }}>
          Kampa Katıl
        </Button>
      </Detail2>
    </Wrap>
  );
};

export default AYTMatematik; 