"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  X,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

import Admin from "@/assets/images/main.png";
import V from "@/assets/images/V.png";
import { projects } from "@/datas/works";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEZ7k4828sw2gvFr--kwhRJwIN5nxPKo3EtJOae4Z-JMXuZg/viewform?usp=dialog";

const GITHUB_URL = "https://github.com/klimes888";
const X_URL = "https://x.com/kim_taehee33768";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectList, setProjectList] = useState<typeof projects>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const outterLink = (link: string) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (!projects || projects.length === 0) return;
    setProjectList(projects.sort((a, b) => b.id - a.id));
  }, [projects]);

  const skills = [
    { icon: Code, name: "Frontend Development", color: "#3b82f6" },
    { icon: Smartphone, name: "Mobile Development", color: "#10b981" },
    { icon: Palette, name: "Publishing", color: "#8b5cf6" },
    { icon: Globe, name: "Full Stack", color: "#f97316" },
  ];

  return (
    <Container>
      {/* Animated Background */}
      <AnimatedBackground>
        <BackgroundBlur x={mousePosition.x} y={mousePosition.y} />
      </AnimatedBackground>

      {/* Navigation */}
      <Navigation initial={{ y: -100 }} animate={{ y: 0 }}>
        <NavContainer>
          <NavContent>
            <Logo whileHover={{ scale: 1.05 }}>Soft Landing's Portfolio</Logo>
            <NavActions>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => outterLink(GITHUB_URL)}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => outterLink(X_URL)}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                onClick={() => outterLink(GOOGLE_FORM_URL)}
              >
                <Mail className="w-4 h-4 mr-1" />
                문의하기
              </Button>
            </NavActions>
          </NavContent>
        </NavContainer>
      </Navigation>

      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroGrid>
            <HeroContent
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTextContainer>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border-teal-500/30">
                    Available for work
                  </Badge>
                </motion.div>
                <HeroTitle
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <TitleSpan gradient="linear-gradient(45deg, #ffffff, #d1d5db)">
                    상상했던
                  </TitleSpan>
                  <br />
                  <TitleSpan gradient="linear-gradient(45deg, #14b8a6, #3b82f6)">
                    아이디어를
                  </TitleSpan>
                  <br />
                  <TitleSpan gradient="linear-gradient(45deg, #ffffff, #d1d5db)">
                    현실로 만듭니다
                  </TitleSpan>
                </HeroTitle>
                <HeroDescription
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Full-stack developer and designer passionate about creating
                  beautiful, functional, and user-centered digital experiences.
                </HeroDescription>
              </HeroTextContainer>

              <SkillsContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <SkillIcon $bgColor={skill.color}>
                      <skill.icon className="w-4 h-4 text-white" />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsContainer>
            </HeroContent>
            <HeroImageContainer
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroImageWrapper>
                <HeroImage
                  src={Admin}
                  alt="Portfolio Hero"
                  width={600}
                  height={400}
                />
                <FingerImage src={V} alt="Hero V" width={200} height={200} />
                <HeroImageBlur src={Admin} alt="Portfolio Hero" />
                <ImageOverlay />
              </HeroImageWrapper>

              {/* Floating Elements */}
              <FloatingElement
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                position="top: -1rem; right: -1rem;"
                gradient="linear-gradient(45deg, #14b8a6, #3b82f6)"
              >
                <Code className="w-6 h-6 text-white" />
              </FloatingElement>

              <FloatingElement
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
                position="bottom: -1rem; left: -1rem;"
                gradient="linear-gradient(45deg, #8b5cf6, #ec4899)"
              >
                <Palette className="w-6 h-6 text-white" />
              </FloatingElement>
            </HeroImageContainer>
          </HeroGrid>
        </HeroContainer>
      </HeroSection>

      {/* Projects Section */}
      <ProjectsSection>
        <ProjectsContainer>
          <SectionHeader
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>
              <TitleSpan gradient="linear-gradient(45deg, #ffffff, #d1d5db)">
                WEB / APP
              </TitleSpan>{" "}
              <TitleSpan gradient="linear-gradient(45deg, #14b8a6, #3b82f6)">
                프로젝트
              </TitleSpan>
            </SectionTitle>
            <SectionDescription>
              {`프론트 / 서버 / 인프라 모든 분야에서 개발하고 활동해왔습니다\n최고의 사용자 경험과 유저를 위한 코드를 설계합니다`}
            </SectionDescription>
          </SectionHeader>

          <ProjectsGrid>
            {projectList.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard>
                  <ProjectImageContainer>
                    <ProjectImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={500}
                    />
                    <ProjectImageOverlay />
                    <ProjectActions>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-lg"
                        onClick={() =>
                          project.github ? outterLink(project.github) : {}
                        }
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-lg"
                        onClick={() => outterLink(project.live)}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </ProjectActions>
                  </ProjectImageContainer>
                  <CardContent className="p-6">
                    <ProjectContent>
                      <ProjectInfo>
                        <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border-teal-500/30 mb-2 w-fit">
                          {project.category}
                        </Badge>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>
                          {project.description}
                        </ProjectDescription>
                      </ProjectInfo>
                      <ProjectTags>
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-white/30 text-gray-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </ProjectTags>
                    </ProjectContent>
                  </CardContent>
                </StyledCard>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FooterTitle>부담 없이 문의 주세요</FooterTitle>
            <FooterDescription>
              재미로 하는 프리랜서 일이라 딱딱하지 않게 서로 부담 없이
              얘기했으면 좋겠습니다😎
            </FooterDescription>
            <Button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 mx-auto"
              onClick={() => outterLink(GOOGLE_FORM_URL)}
            >
              <Mail className="w-4 h-4 mr-1" />
              문의하기
            </Button>
          </FooterContent>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: white;
  overflow: hidden;
`;

const AnimatedBackground = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

const BackgroundBlur = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 24rem;
  height: 24rem;
  background: linear-gradient(
    45deg,
    rgba(20, 184, 166, 0.2),
    rgba(59, 130, 246, 0.2)
  );
  border-radius: 50%;
  filter: blur(3rem);
  left: ${(props) => props.x - 192}px;
  top: ${(props) => props.y - 192}px;
`;

const Navigation = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1.5rem;
`;

const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const NavContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #14b8a6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeroSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const HeroContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const TitleSpan = styled.span<{ gradient: string }>`
  background: ${(props) => props.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: #d1d5db;
  line-height: 1.6;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillIcon = styled.div<{ $bgColor: string }>`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.$bgColor};
`;

const SkillName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(16px);
  border-radius: 1.5rem;
  padding: 2rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroImageBlur = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 98%;
  filter: blur(1em);
  opacity: 0.65;
  z-index: -1;
  margin-left: 1em;
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
  z-index: 9;
  margin-left: 1em;
`;

const FingerImage = styled(Image)`
  position: absolute;
  bottom: 2em;
  left: 0.75em;
  width: 25%;
  filter: brightness(0.95);
  height: auto;
  z-index: 9;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  border-radius: 1.5rem;
`;

const FloatingElement = styled(motion.div)<{
  position: string;
  gradient: string;
}>`
  position: absolute;
  ${(props) => props.position};
  background: ${(props) => props.gradient};
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const ProjectsSection = styled.section`
  padding: 5rem 1.5rem;
`;

const ProjectsContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.p`
  white-space: pre-wrap;
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 32rem;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  &:hover {
    transform: translateY(-0.625rem);
  }
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Footer = styled.footer`
  padding: 3rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #14b8a6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const FooterDescription = styled.p`
  color: #d1d5db;
`;
