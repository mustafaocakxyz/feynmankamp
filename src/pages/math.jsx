import styled from "styled-components";
import { Calculator, Calendar, Users, Target, ListChecks } from "lucide-react";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%, #c0c0c0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 60px 0;
  text-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
  animation: fadeInDown 0.8s ease-out both;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 30px;
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

const FeatureCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`;

const FeatureCard = styled.div`
  width: 100%;
  background: linear-gradient(135deg, 
    #1565c0 0%, 
    #1976d2 20%, 
    #2196f3 40%, 
    #42a5f5 70%, 
    #2196f3 80%, 
    #1976d2 100%);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(21, 101, 192, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out both;
  
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
    transform: scale(1.05); /* slight zoom */
    box-shadow: 
      0 15px 40px rgba(21, 101, 192, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
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

const FeatureContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;

  svg {
    width: 50px;
    height: 50px;
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled.button`
  padding: 18px 32px;
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #2196f3 100%);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.3);
  margin-top: 40px;
  font-family: 'Mont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: 1.6s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(21, 101, 192, 0.4);
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #42a5f5 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 16px 28px;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 1rem;
    margin-top: 25px;
  }
`;

const Math = () => {
  const handleCTAClick = () => {
    window.open('https://www.shopier.com/38947185', '_blank');
  };

  return (
    <PageContainer>
      <PageTitle>İlk 12 Konu Kampı</PageTitle>
      
      <FeatureCardsContainer>
        <FeatureCard style={{ animationDelay: '0.4s' }}>
          <FeatureContent>
            <FeatureIcon>
              <Calculator />
            </FeatureIcon>
            <FeatureDescription>
              TYT Matematiğin ilk 12 konusunu derece öğrencisinin anlatımıyla öğreneceksin.
            </FeatureDescription>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard style={{ animationDelay: '0.6s' }}>
          <FeatureContent>
            <FeatureIcon>
              <ListChecks />
            </FeatureIcon>
            <FeatureDescription>
              Bu konulardan her sene 10 soru çıkmaktadır. Bu konularda ustalık kazanarak TYT Matematik'te 10 neti garantileyebilirsin.
            </FeatureDescription>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard style={{ animationDelay: '0.8s' }}>
          <FeatureContent>
            <FeatureIcon>
              <Target />
            </FeatureIcon>
            <FeatureDescription>
              Çıkmış soruları Feynman Tekniği ile çözerek ustalık kazanacaksın.
            </FeatureDescription>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard style={{ animationDelay: '1s' }}>
          <FeatureContent>
            <FeatureIcon>
              <Calendar />
            </FeatureIcon>
            <FeatureDescription>
              Kamp 7 - 8 Eylül günlerinde ve 18.00 - 20.00 saatleri arasında gerçekleşecektir.
            </FeatureDescription>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard style={{ animationDelay: '1.2s' }}>
          <FeatureContent>
            <FeatureIcon>
              <Users />
            </FeatureIcon>
            <FeatureDescription>
              Toplam 40 kontenjandan 2 tanesi doldu. Hemen yerini ayırt.
            </FeatureDescription>
          </FeatureContent>
        </FeatureCard>
      </FeatureCardsContainer>

      <CTAButton onClick={handleCTAClick}>
        Kampa Katıl
      </CTAButton>
    </PageContainer>
  );
};

export default Math;
