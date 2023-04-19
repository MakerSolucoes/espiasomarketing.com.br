import React, { useEffect, useState } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
// import PortfolioSlider from '../Slider/PortfolioSlider';
import PortfolioPage  from './PortfolioPage';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import getApiConfigs from '../../apiConfig';
import './scss/home/home.scss';

export default function Home() {
	pageTitle('Home');
	const [apiConfigs, setApiConfigs] = useState({});


	function formatTestmonials(apiTestimonials) {
		return apiTestimonials.map((testimonial) => {
			return {
				testimonialThumb: testimonial.imagem,
				testimonialText: testimonial.descricao,
				avatarName: testimonial.nome,
				avatarDesignation: testimonial.cargo,
				ratings: testimonial.rating,
			};
		});
	}

	function formatTeamData(apiTeamData) {
		return apiTeamData.map((member) => {
			const socialLinks = {
				linkedin: '',
				twitter: '',
				youtube: '',
				facebook: '',
				instagram: '',
			};
			// Verifica cada plataforma social e atribui o link correto

			if (member.social) {
				member.social.forEach((socialItem) => {
					if (socialItem.plataforma.toLowerCase() === 'linkedin') {
						socialLinks.linkedin = socialItem.link;
					} else if (socialItem.plataforma.toLowerCase() === 'twitter') {
						socialLinks.twitter = socialItem.link;
					} else if (socialItem.plataforma.toLowerCase() === 'youtube') {
						socialLinks.youtube = socialItem.link;
					} else if (socialItem.plataforma.toLowerCase() === 'facebook') {
						socialLinks.facebook = socialItem.link;
					} else if (socialItem.plataforma.toLowerCase() === 'instagram') {
						socialLinks.instagram = socialItem.link;
					}
				});
			}

			return {
				memberImage: member.thumbnail,
				memberName: member.title,
				memberDesignation: member.content,
				memberSocial: socialLinks,
			};
		});
	}

	useEffect(() => {
		const fetchData = async () => {
			const configs = await getApiConfigs();
			setApiConfigs(configs);
		};

		fetchData();
		window.scrollTo(0, 0);
	}, []);
	const Main = apiConfigs.main
	const curiosidades = apiConfigs.curiosidades
	const servicos = apiConfigs.servicos
	const video = apiConfigs.video
	const time = apiConfigs.time
	const depoimentos = apiConfigs.depoimentos
	const parceiros = apiConfigs.parceiros
	const agendamento = apiConfigs.agendamento
	return (
		<>
			{Main ? (
				<>
					{/* Conteúdo dependente de Main */}
					<Div id="home">
						<Hero 
							title={Main.titulo}
							subtitle={Main.descricao}
							btnText="Faça um orçamento"
							btnLink={Main.link_orcamento}
							scrollDownId="#service"
							socialLinksHeading=""
							heroSocialLinks=''
							bgImageUrl="/images/hero_bg.jpeg"/>
					</Div>
					<Div id="curiosidades">

						<div className="container">
							<FunFact
								variant="cs-type1"
								title={curiosidades.titulo}
								subtitle={curiosidades.descricao}
								data={
									curiosidades.loop.map((curiosidade) => ({
										title: curiosidade.descricao,
										factNumber: curiosidade.valor,
									}))
								}
							/>
						</div>
					</Div>
					{/* Serviços */}
					<Spacing lg="150" md="80" />
					<Div id="servicos">
						<Div className="container">
							<Div className="row">
								<Div className="col-xl-4">
									<SectionHeading
										title={servicos.titulo}
										subtitle={servicos.header}
										btnText="Ver todos nossos serviços"
										btnLink="#"
									/>
									<Spacing lg="90" md="45" />
								</Div>
								<Div className="col-xl-8">
									<Div className="row">
										<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
										{servicos.loop.map((servico, index) => (
											<Div key={index} className="col-lg-3 col-sm-6">
												<Card
													title={servico.titulo}
													link="#"
													src={servico.background}
													alt="Service"
												/>
												<Spacing lg="0" md="30" />
											</Div>
										))}
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>

					{/* End Service Section */}
					{/* Start video Section */}
					<Div id="video" className="container">
						<h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
							{video.descricao}
						</h2>
						<Spacing lg="70" md="70" />
						<VideoModal
							videoSrc={video.link}
							bgUrl={video.background}
						/>
					</Div>
					{/* End video Section */}

					{/* Start Team Section */}
					<Div id="team" className="container">
						<SectionHeading
							title="Espia só a <br/>nossa equipe"
							subtitle=" "
							variant="cs-style1"
						/>
						<Spacing lg="85" md="45" />
						<TeamSlider
							teamData={formatTeamData(time)}
						/>
					</Div>
					{/* End Team Section */}
					{/* Start Portfolio Section */}
					<Div id="portfolio">
						<PortfolioPage />
					</Div>
					{/* End Portfolio Section */}

					{/* Start Testimonial Section */}
					<Div id="depoimentos">
						<TestimonialSlider
							testimonialData={formatTestmonials(depoimentos.loop)}
						/>
					</Div>
					{/* End Testimonial Section */}

					{/* Start MovingText Section */}
					<Div id="parceiros">
						<MovingText text={parceiros.titulo} />
						
						<Div className="container">
							<LogoList
								partnerLogos={parceiros.loop}
							/>
						</Div>
					</Div>
					{/* End LogoList Section */}


					{/* Start CTA Section */}
					<Div id="agendamento" className="container">
						<Cta
							title={agendamento.titulo}
							btnText={agendamento.botao.titulo}
							btnLink={agendamento.botao.link}
							bgSrc={agendamento.background}
						/>
					</Div>
					{/* End CTA Section */}

				</>
			) : (
				<div></div>
			)}
			<Div className="hidden">
			{/* HIDE  Start Awards Section */}
			<Div className="cs-shape_wrap_2">
				<Div className="cs-shape_2">
					<Div />
				</Div>
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-4">
							<SectionHeading
								title="We get multiple awards"
								subtitle="Our Awards"
								variant="cs-style1"
							/>
							<Spacing lg="90" md="45" />
						</Div>
						<Div className="col-xl-7 offset-xl-1">
							<TimelineSlider />
						</Div>
					</Div>
				</Div>
			</Div>
			{/* End Awards Section */}

			{/* HIDE -  Start Blog Section */}
			<Div className="cs-shape_wrap_4 hidden">
				<Div className="cs-shape_4"></Div>
				<Div className="cs-shape_4"></Div>
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-4">
							<SectionHeading
								title="Explore recent publication"
								subtitle="Our Blog"
								btnText="View More Blog"
								btnLink="/blog"
							/>
							<Spacing lg="90" md="45" />
						</Div>
						<Div className="col-xl-7 offset-xl-1">
							<Div className="cs-half_of_full_width">
								<PostSlider />
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			</Div>
			{/* End Blog Section */}
		</>
	);
}
