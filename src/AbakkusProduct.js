import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Heading, Tile, Section, Table, Content } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";
import AbakkusAdvisory from "./AbakkusAdvisory.js";

class AbakkusProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getTopTenStocks(abakkusProduct) {
		if (Object.keys(abakkusProduct.top_10).length !== 0) {
			return (
				<Tile kind="parent" size={5}>
					<Tile
						renderAs="article"
						kind="child"
						notification
						color="light"
						style={{ boxShadow: "0px 1px 12px rgba(0,0,0,0.3)" }}
					>
						<div className="content">
							<Heading>Top Ten</Heading>
							<div className="content">
								<Table bordered={true}>
									<thead>
										<tr>
											<th>Stock Name</th>
											<th>Percentage</th>
										</tr>
									</thead>
									<tbody>
										{Object.keys(abakkusProduct.top_10).map((key, index) => (
											<tr>
												<td>{key}</td>
												<td>{abakkusProduct.top_10[key]}</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
						</div>
					</Tile>
				</Tile>
			);
		}
		return;
	}

	render() {
		const abakkusProduct = this.props.jsonObj;
		console.log(Object.keys(abakkusProduct.top_10));
		return (
			<div>
				<Helmet>
					<title>{abakkusProduct.name}</title>
				</Helmet>
				<AbakkusNavbar />
				<div>
					<Section>
						<Tile kind="ancestor" vertical>
							<Tile kind="parent" style={{ marginBottom: "-16px" }}>
								<Tile kind="parent">
									<Tile
										renderAs="article"
										kind="child"
										notification
										color="danger"
										style={{
											background: "rgb(40, 56, 123)",
											boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
										}}
									>
										<Heading>{abakkusProduct.name}</Heading>
									</Tile>
								</Tile>
							</Tile>
							<Tile kind="parent">
								<Tile vertical>
									<Tile>
										<Tile kind="parent" vertical>
											<Tile
												renderAs="article"
												kind="child"
												notification
												color="primary"
												style={{
													background: "rgb(0, 80, 123)",
													boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
												}}
											>
												<Heading subtitle>{abakkusProduct.brief}</Heading>
											</Tile>
											<Tile
												renderAs="article"
												kind="child"
												notification
												color="primary"
												style={{
													background: "rgb(0, 95, 140)",
													boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
												}}
											>
												<Heading>Fund Manager</Heading>
												<Heading subtitle>
													{abakkusProduct.fund_manager}
												</Heading>
											</Tile>
											<Tile
												renderAs="article"
												kind="child"
												notification
												color="primary"
												style={{
													background: "rgb(0, 49, 79)",
													boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
												}}
											>
												<Heading>Benchmark</Heading>
												<Heading subtitle>{abakkusProduct.benchmark}</Heading>
											</Tile>
											<Tile
												renderAs="article"
												kind="child"
												notification
												color="primary"
												style={{
													background: "rgb(0, 40, 60)",
													boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
												}}
											>
												<Heading>Custodian</Heading>
												<Heading subtitle>{abakkusProduct.custodian}</Heading>
											</Tile>
										</Tile>
										<Tile kind="parent" vertical>
											<Tile
												renderAs="article"
												kind="child"
												notification
												color="info"
												style={{ boxShadow: "0px 1px 12px rgba(0,0,0,0.3)" }}
											>
												<Heading>Strategy</Heading>
												<Heading subtitle>
													<Content>
														<ul>
															{abakkusProduct.strategy.map((item, index) => (
																<li>{item}</li>
															))}
														</ul>
													</Content>
												</Heading>
											</Tile>
										</Tile>
									</Tile>
								</Tile>
								{this.getTopTenStocks(abakkusProduct)}
							</Tile>
							<Tile kind="parent" style={{ marginTop: "-16px" }}>
								<Tile kind="parent">
									<Tile
										renderAs="article"
										kind="child"
										notification
										color="success"
										style={{
											background: "rgb(232, 136, 62)",
											boxShadow: "0px 1px 12px rgba(0,0,0,0.3)",
										}}
									>
										<div className="content">
											<Heading subtitle>Disclaimer</Heading>
											<p>{abakkusProduct.disclaimer}</p>
										</div>
									</Tile>
								</Tile>
							</Tile>
						</Tile>
					</Section>
				</div>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusProduct;
