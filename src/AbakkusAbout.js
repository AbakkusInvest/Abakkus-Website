import React, { Component } from "react";
import { Helmet } from "react-helmet";

import {
	Section,
	Heading,
	Container,
	Table,
	Content,
} from "react-bulma-components";

import AbakkusNavbar from "./AbakkusNavbar.js";
import AbakkusFooter from "./AbakkusFooter.js";
import AbakkusAdvisory from "./AbakkusAdvisory.js";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

class AbakkusAbout extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Abakkus About</title>
				</Helmet>
				<AbakkusNavbar />
				<div>
					<Section>
						<Container style={{ marginLeft: "32px", marginRight: "32px" }}>
							<Heading>Our Story</Heading>
							<Heading subtitle>Why the name Abakkus?</Heading>
							<p>
								The name Abakkus is inspired by the English word, Abacus, which
								refers to a “simple instrument used for computing”.
								<br />
								This ideology has shaped our beliefs. We like to:
							</p>
							<br />
							<ol>
								<li>Keep things simple.</li>
								<li>Believe in the basics.</li>
								<li>Focus on the fundamentals and numbers.</li>
							</ol>
							<br />
							<p>
								On the other hand, our logo, inspired by squirrels, represents
								six key things:
							</p>
							<br />
							<ol>
								<li>Flexibility</li>
								<li>Energy</li>
								<li>Passion</li>
								<li>Balance</li>
								<li>Trust</li>
								<li>Accumulation</li>
							</ol>
							<br />
						</Container>
						<Container
							fluid
							style={{ marginRight: "32px", marginBottom: "48px" }}
						>
							<Heading>Offerings</Heading>
							<p>
								Abakkus is an alpha focused boutique asset manager managing long
								only equity strategies in India:
							</p>
							<ol>
								<li>Close ended Category III Alternative Investment Funds</li>
								<li>Portfolio Management Services</li>
								<li>
									Advisory Services for Domestic and International Investors
								</li>
							</ol>
							<p>
								Ambition and vision is to make Abakkus, one of India's most
								revered and top performing asset managers over time.
							</p>
						</Container>
						<Container
							fluid
							style={{ marginRight: "32px", marginBottom: "48px" }}
						>
							<Heading>Investment Philosophy</Heading>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>New themes start small</Heading>
								</AccordionSummary>

								<AccordionDetails>
									Investing in a new and emerging theme and getting it right can
									create significant alpha and India being a growing emerging
									country, new sectors and themes evolve regularly. One has to
									be early and patient in this style of investing with the view
									of capitalizing on the awareness dissymmetry.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>
										Near to medium term uptrend in smaller sectors
									</Heading>
								</AccordionSummary>

								<AccordionDetails>
									All sectors go through business cycles and unlike the larger
									one which are well tracked smaller ones get ignored. Cyclicals
									by nature will have their time under the sun and the way to
									gain from this opportunity is by regular in-house primary
									research.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>Consistency leads to re-rating</Heading>
								</AccordionSummary>

								<AccordionDetails>
									Investors prefer consistency and inconsistent companies
									typically get relatively lower valuation multiples.
									Inconsistency can be due to various macro or micro factors and
									once that issue is resolved and reflects in business
									performance, markets are bound to take note. To benefit from
									this opportunity one has to analyze the reason and assess if
									the same can be satisfactorily addressed.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>Deep Value</Heading>
								</AccordionSummary>
								<AccordionDetails>
									Market apathy, lack of near-term triggers, liquidity, under
									researched, etc. are some of the main reasons why some
									companies trade at much below their intrinsic/replacement
									value. Key to capitalize on this opportunity is by ensuring
									not getting stuck in a “value-trap” and by identifying deep
									value but with some growth.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>Special situations</Heading>
								</AccordionSummary>
								<AccordionDetails>
									There are always unique opportunities in markets that arise
									like M&A, Holding companies trading at substantial discounts,
									splits in conglomerates etc. These events have potential to
									unlock substantial shareholder wealth.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
								>
									<Heading subtitle>Steady cash generating companies</Heading>
								</AccordionSummary>
								<AccordionDetails>
									There are companies generating good cash flows but limited by
									near-term growth opportunities and hence ignored by investors.
									Judicious use of cash for debt repayment, buybacks and /or
									dividends, acquisitions can add value to equity shareholders
								</AccordionDetails>
							</Accordion>
						</Container>
						<Container
							fluid
							style={{ marginRight: "32px", marginBottom: "48px" }}
						>
							<Heading>MEETS Framework</Heading>
							<Table striped={false}>
								<thead>
									<tr>
										<th>
											<Heading subtitle>
												<b>Management</b>
											</Heading>
										</th>
										<th>
											<Heading subtitle>
												<b>Earnings</b>
											</Heading>
										</th>
										<th>
											<Heading subtitle>
												<b>Events / Trends</b>
											</Heading>
										</th>
										<th>
											<Heading subtitle>
												<b>Timing</b>
											</Heading>
										</th>
										<th>
											<Heading subtitle>
												<b>Structural</b>
											</Heading>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Quality-Capability and track record</td>
										<td>Quality of earnings vs reported numbers</td>
										<td>Stock Movement because of events</td>
										<td>
											Good company is not necessarily a good investment if price
											is not right
										</td>
										<td>Size of opportunity</td>
									</tr>
									<tr>
										<td>
											Capital Allocation - Capex is fine if ROE is maintained or
											enhanced
										</td>
										<td>Actual earnings vs expected</td>
										<td>Can buy or sell opportunity</td>
										<td>What is price discounting?</td>
										<td>Competitive positioning / MOAT</td>
									</tr>
									<tr>
										<td>
											Capital Distribution - Fair to minority shareholders
										</td>
										<td>Cyclical vs Structural earnings</td>
										<td>Events on the horizon</td>
										<td>Time frame of investment</td>
										<td>Consistent growth in profits</td>
									</tr>
									<tr>
										<td>
											Errors in decision - business errors vs intentional
											mishaps
										</td>
										<td>
											Companies that can double profits in 4 years or less or
											where EV/EBITDA can halve in 4 years
										</td>
										<td>Disruptive trends / New themes</td>
										<td>Mean Reversion</td>
										<td></td>
									</tr>
								</tbody>
							</Table>
						</Container>
						<Container
							fluid
							style={{ marginRight: "32px", marginBottom: "48px" }}
						>
							<Heading>Opportunity Matrix</Heading>
							<br />
							<Heading subtitle>New themes start small</Heading>
							<Content>
								<ul>
									<li>
										Investing in a new and emerging theme and getting it right
										can create significant alpha and India being a growing
										emerging country, new sectors and themes evolve regularly.
										One has to be early and patient in this style of investing
										with the view of capitalizing on the awareness dissymmetry.
									</li>
								</ul>
							</Content>
							<Heading subtitle>
								Near to medium term uptrend in smaller sectors
							</Heading>
							<Content>
								<ul>
									<li>
										All sectors go through business cycles and unlike the larger
										one which are well tracked smaller ones get ignored.
										Cyclicals by nature will have their time under the sun and
										the way to gain from this opportunity is by regular in-house
										primary research.
									</li>
								</ul>
							</Content>
							<Heading subtitle>Consistency leads to re-rating</Heading>
							<Content>
								<ul>
									<li>
										Investors prefer consistency and inconsistent companies
										typically get relatively lower valuation multiples.
										Inconsistency can be due to various macro or micro factors
										and once that issue is resolved and reflects in business
										performance, markets are bound to take note. To benefit from
										this opportunity one has to analyze the reason and assess if
										the same can be satisfactorily addressed.
									</li>
								</ul>
							</Content>
							<Heading subtitle>Deep Value</Heading>
							<Content>
								<ul>
									<li>
										Market apathy, lack of near-term triggers, liquidity, under
										researched, etc. are some of the main reasons why some
										companies trade at much below their intrinsic/replacement
										value. Key to capitalize on this opportunity is by ensuring
										not getting stuck in a “value-trap” and by identifying deep
										value but with some growth.
									</li>
								</ul>
							</Content>
							<Heading subtitle>Special situations</Heading>
							<Content>
								<ul>
									<li>
										There are always unique opportunities in markets that arise
										like M&A, Holding companies trading at substantial
										discounts, splits in conglomerates etc. These events have
										potential to unlock substantial shareholder wealth.
									</li>
								</ul>
							</Content>
							<Heading subtitle>Steady cash generating companies</Heading>
							<Content>
								<ul>
									<li>
										There are companies generating good cash flows but limited
										by near-term growth opportunities and hence ignored by
										investors. Judicious use of cash for debt repayment,
										buybacks and /or dividends, acquisitions can add value to
										equity shareholders
									</li>
								</ul>
							</Content>
						</Container>
					</Section>
				</div>
				<AbakkusFooter />
			</div>
		);
	}
}

export default AbakkusAbout;
