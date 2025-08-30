import styled from "styled-components";
import { TextSearch, Radical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  gap: 60px;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const MetallicCard = styled.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  background: linear-gradient(135deg, 
    #bf360c 0%, 
    #d84315 20%, 
    #e64a19 40%, 
    #f57c00 70%, 
    #e64a19 80%, 
    #d84315 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(216, 67, 21, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 0.6s;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 👈 smooth change */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(0, 0, 0, 0.1) 100%);
    border-radius: 20px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(0) scale(1.15);
    cursor: pointer;
    box-shadow: 
      0 15px 40px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 275px;
    padding: 25px;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 20px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const BlueMetallicCard = styled(MetallicCard)`
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #1976d2 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  box-shadow: 
    0 10px 30px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation-delay: 1s;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

const CardText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardMainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const AttendeeCount = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 15px 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 20px 0;
  line-height: 1.5;
  max-width: 75%;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 70%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 65%;
  }
`;

const CardDateTime = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  svg {
    width: 180px;
    height: 180px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    width: 60px;
    
    svg {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    
    svg {
      width: 120px;
      height: 120px;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleParagraphClick = () => {
    navigate("/paragraph");
  };

  const handleMathClick = () => {
    navigate("/math");
  };

  return (
    <HomeContainer>
      <MainTitle>Hangi kampla ilgileniyorsun?</MainTitle>
      
      <CardContainer>
        <MetallicCard onClick={handleParagraphClick}>
          <CardContent>
            <CardHeader>
              <CardText>
                <CardMainContent>
                  <CardTitle>Paragraf Kampı</CardTitle>
                  <AttendeeCount>40 kontenjandan 7'si kaldı</AttendeeCount>
                  <CardDescription>
                    Derece öğrencisiyle birlikte çıkmış paragraf sorularını analiz et ve paragraf netlerini artır.
                  </CardDescription>
                </CardMainContent>
                <CardDateTime>📅 6 Eylül Cumartesi, 18.00 - 19.30</CardDateTime>
              </CardText>
              <CardIcon>
                <TextSearch />
              </CardIcon>
            </CardHeader>
          </CardContent>
        </MetallicCard>

        <BlueMetallicCard onClick={handleMathClick}>
          <CardContent>
            <CardHeader>
              <CardText>
                <CardMainContent>
                  <CardTitle>İlk 12 Konu Kampı</CardTitle>
                  <AttendeeCount>40 kontenjandan 7'si kaldı</AttendeeCount>
                  <CardDescription>
                    Derece öğrencisiyle birlikte TYT Matematiğin ilk 12 konusunu öğren ve çıkmış soruları Feynman Tekniği ile çözerek ustalık kazan.
                  </CardDescription>
                </CardMainContent>
                <CardDateTime>📅 7 Eylül Pazar, 18.00 - 21.00</CardDateTime>
              </CardText>
              <CardIcon>
                <Radical />
              </CardIcon>
            </CardHeader>
          </CardContent>
        </BlueMetallicCard>
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
