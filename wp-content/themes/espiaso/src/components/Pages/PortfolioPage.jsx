import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import getApiConfigs from '../../apiConfig';

export default function PortfolioPage() {
	const [apiConfigs, setApiConfigs] = useState({});

	const [active, setActive] = useState('all');
	const [itemShow, setItemShow] = useState(7);
	


	function getPosts(posts) {
		if (!posts) {
			return
		} else {
			let response = posts.map((post) => {
				let categories = post.categoria.map((category) => {
					return category.slug
				})
				let categoriesNames = post.categoria.map((category) => {
					return category.name
				})
				let portfolio = {
					title: post.title,
					subtitle: categoriesNames.join(', '),
					href: post.slug,
					src: post.thumbnail,
					category: categories
				}
				return portfolio
			})
			return response;
		}
	}

	function getCategoriesPosts(posts) {
		if (!posts) {
		  return [];
		} else {
		  let all_categories = [];
		  posts.forEach((post) => {
			post.categoria.forEach((category) => {
			  const existingCategory = all_categories.find(
				(c) => c.title === category.name && c.category === category.slug
			  );
			  if (!existingCategory) {
				all_categories.push({ title: category.name, category: category.slug });
			  }
			});
		  });
		  return all_categories;
		}
	  }
	  



	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			const configs = await getApiConfigs();
			setApiConfigs(configs);
		};

		fetchData();
	}, []);
	const portfolio = apiConfigs.portfolio
	const categoriesMenu = getCategoriesPosts(portfolio)
	const postsLoop = getPosts(portfolio)
	return (
		<>
			{portfolio ? (
				<>
					<Div className="container">
						<Div className="cs-portfolio_1_heading">
							<SectionHeading title="Nossos trabalhos recentes" subtitle="Portfolio" />
							<Div className="cs-filter_menu cs-style1">
								<ul className="cs-mp0 cs-center">
									<li className={active === 'all' ? 'active' : ''}>
										<span onClick={() => setActive('all')}>Todos</span>
									</li>
									{categoriesMenu.map((item, index) => (
										<li
											className={active === item.category ? 'active' : ''}
											key={index}
										>
											<span onClick={() => setActive(item.category)}>
												{item.title}
											</span>
										</li>
									))}
								</ul>
							</Div>
						</Div>
						<Spacing lg="90" md="45" />
						<Div className="row">
							{postsLoop.slice(0, itemShow).map((item, index) => (
								<Div
									className={`${index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
										} ${active === 'all'
											? ''
											: !item.category.some(cat => cat === active)
												? 'd-none'
												: ''
										}`}
									key={index}
								>
									<Portfolio
										title={item.title}
										subtitle={item.subtitle}
										href={item.href}
										src={item.src}
										variant="cs-style1 cs-type1"
									/>
									<Spacing lg="25" md="25" />
								</Div>
							))}

						</Div>

						<Div className="text-center">
							{postsLoop.length <= itemShow ? (
								''
							) : (
								<>
									<Spacing lg="65" md="40" />
									<span
										className="cs-text_btn"
										onClick={() => setItemShow(itemShow + 3)}
									>
										<span>Carregar mais</span>
										<Icon icon="bi:arrow-right" />
									</span>
								</>
							)}
						</Div>
					</Div>
				</>
			) : (
				<div></div>
			)}

		</>
	);
}
