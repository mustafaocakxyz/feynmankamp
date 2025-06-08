import styled from "styled-components";
import banner from "../public/banner.png";
import placeholder from "../public/placeholder.png";
import image2 from "../public/2.png";
import image3 from "../public/3.png";
import image4 from "../public/4.png";
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
  gap: 156px;
  margin: 195px 0px 260px 0;
  align-items: center;
  justify-content: center;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 65px;
    margin-top: 52px;
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

const CoursesSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 0 120px;
  margin-bottom: 100px;

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  @media (max-width: 440px) {
    max-width: 95%;
    margin: 0 auto 100px auto;
  }
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  animation: fadeInUp 0.8s ease-in-out both;
  animation-delay: ${({ $delay }) => $delay}s;

  > img.course-image {
    width: 500px;
    height: 800px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 440px) {
      width: 100%;
      height: auto;
    }
  }
`;

const CourseButton = styled(Button)`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(#260f69, #1e41ba);
  color: white;

  &:hover {
    background: linear-gradient(#372087, #254de0);
  }
`;

const PhysicsButton = styled(CourseButton)`
  background: linear-gradient(#1a5c1a, #2d8a2d);
  color: white;

  &:hover {
    background: linear-gradient(#2d8a2d, #3ca63c);
  }
`;

const GeometryButton = styled(CourseButton)`
  background: linear-gradient(#4a1a5c, #6a2d8a);
  color: white;

  &:hover {
    background: linear-gradient(#6a2d8a, #8a3ca6);
  }
`;

const ChemistryButton = styled(CourseButton)`
  background: linear-gradient(#c71585, #ff69b4);
  color: white;

  &:hover {
    background: linear-gradient(#ff69b4, #ff1493);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrap>
      <Navbar />
      <Container>
        <div>
          <Title style={{ color: "#36B7FF" }}>Son Darbe Kampları</Title>
          <Title>İle Son Düzlükte</Title>
          <Title>Netlerini Artır!</Title>
          <p style={{ maxWidth: "400px" }}>
            Bir türlü halledemediğin dersleri ve artmayan netlerini
            bizzat SAY 249.su ile ve
            "Full Tekrar + Çıkmışlara Feynman" tekniği ile çalışarak
            kısa sürede hallet!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-start",
              marginBlock: "18px",
            }}
          >
            <Button onClick={handleJoinClick}>
              Kampları Gör
            </Button>
            <span style={{ fontSize: "16px"}}>*Kamplarımızın kontenjanı sınırlıdır ve giriş ücretlidir.</span>
          </div>
        </div>
        <WrapImg>
          <img src={banner} />
        </WrapImg>
      </Container>

      <CoursesSection id="courses-section">
        <CourseCard $delay={0.1}>
          <img src={placeholder} alt="AYT Matematik" className="course-image" />
          <CourseButton onClick={() => navigate("/aytmatematik")}>
            AYT Matematik - Detayları Gör
          </CourseButton>
        </CourseCard>
        <CourseCard $delay={0.3}>
          <img src={image2} alt="AYT Fizik" className="course-image" />
          <PhysicsButton onClick={() => navigate("/aytfizik")}>
            AYT Fizik - Detayları Gör
          </PhysicsButton>
        </CourseCard>
        <CourseCard $delay={0.5}>
          <img src={image3} alt="Geometri" className="course-image" />
          <GeometryButton onClick={() => navigate("/geometri")}>
            Geometri - Detayları Gör
          </GeometryButton>
        </CourseCard>
        <CourseCard $delay={0.7}>
          <img src={image4} alt="AYT Kimya" className="course-image" />
          <ChemistryButton onClick={() => navigate("/aytkimya")}>
            AYT Kimya - Detayları Gör
          </ChemistryButton>
        </CourseCard>
      </CoursesSection>
    </Wrap>
  );
};

export default Home;
