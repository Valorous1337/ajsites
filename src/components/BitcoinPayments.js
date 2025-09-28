import React from 'react';
import styled from 'styled-components';
import { QRCodeCanvas } from 'qrcode.react';

const BitcoinSection = styled.section`
  padding: 5rem 0;
  background: #1f2937;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div`
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const QRCodeWrapper = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QRLabel = styled.p`
  color: #d1d5db;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const BitcoinPayments = ({ walletAddress = 'seventyvek42@walletofsatoshi.com' }) => { // Updated default
  return (
    <BitcoinSection id="bitcoin-payments">
      <Container>
        <Content>
          <SectionTitle>Stack Sats with Your Business</SectionTitle>
          <SectionText>
            Revolutionize your Somerset business with seamless BTC payments via mobile POS. Our AI-optimized integration lets you accept Bitcoin effortlessly—no complex setups, just instant satoshi stacking. <strong>Simply scan a QR code to pay</strong>, unlocking a global crypto customer base ready to spend. Plus, get featured on <a href="https://btcmap.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline' }}>BTC Map</a> to attract even more Bitcoiners to your door.
          </SectionText>
        </Content>
        <QRContainer>
          <QRCodeWrapper>
            <QRCodeCanvas value={`lightning:${walletAddress}`} size={200} /> {/* Updated for Lightning address */}
          </QRCodeWrapper>
          <QRLabel>Scan to Pay with BTC – Easy as 1-2-Sats!</QRLabel>
        </QRContainer>
      </Container>
    </BitcoinSection>
  );
};

export default BitcoinPayments;