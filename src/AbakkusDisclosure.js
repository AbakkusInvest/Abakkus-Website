import React, { Component } from "react";

import { Section, Heading, Container, Content } from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";

const disclosureJson = require("./config/disclosureConfig.json");

class AbakkusDisclosure extends Component {
	render() {
		return (
			<div>
				<AbakkusNavbar />
				<Section>
					<Container style={{ marginLeft: "32px", marginRight: "32px" }}>
						<Heading>Disclosures</Heading>
						<Content>
							<ul>
								{disclosureJson.map((disclosureDoc, index) => (
									<li>
										{disclosureDoc.webText}:{" "}
										<a href={disclosureDoc.link}>View Document</a>
									</li>
								))}
							</ul>
						</Content>
					</Container>
				</Section>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusDisclosure;
