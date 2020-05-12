import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../fonts/montserrat.css';
import { Row, Col, Menu, Card, Avatar, Icon, Popover, PageHeader, Button } from 'antd'
import MacTechImage from '../images/mactech-icon.png'
import CSEImage from '../images/uta-heracleia.png'
import UTAImage from '../images/uta-icon.png'
import { MenuData } from '../data/Links'
import { Link, A } from './Link';
import { RoundButton, ImageButton } from './ExpandableButton';
import ResizeableComponent from './ResizeableBase';

const ALink = (props) => {
	return <A className='secondary-color' href={props.link}> {props.children} </A>
}

const Description = () => (
  	<div className='white-color xlarge-font'>
		<div>
			I am working as a Software Engineer Intern at 
			<ALink link={'https://wearedoubleline.com/'}> Double Line. </ALink>
		</div>
		<br/>
		<div>
			Check out the
			<ALink link={'https://scholar.google.com/citations?user=P9t4UugAAAAJ&hl=en&oi=ao'}>
				academic publications
			</ALink>
			that I contributed to while working at the
			<ALink link={'http://heracleia.uta.edu'}> Heracleia Lab. </ALink>
		</div>
		<br/>
		<div>
			I will be graduating, in May 2021, from the
			<ALink link={'https://uta.edu/'}> University of Texas at Arlington </ALink>
			with a Bachelor's of Science in Computer Science.
		</div>
		<br/>
		<div>
			Need to prepare for an interview or a competitive programming competition?
			Check out
			<ALink link={'https://blazeoj.com'}> BlazeJudge. </ALink>
		</div>

		<br/>
		<div>
			I love attending
			<ALink link={'https://devpost.com/jbd95'}> hackathons </ALink>
			and won first place at
			<ALink link={'https://devpost.com/software/edunate-l7k3bs'}> HackHouston 2019 </ALink> 
			and <ALink link={'https://devpost.com/software/meme-royale-9cdr5q'}> HackSMU 2019. </ALink>
		</div>
		<div>
			Check out all of my projects on my
			<ALink link={'https://github.com/jbd95'}> Github. </ALink>
		</div>
	</div>
)

export class CombinedWebsite extends ResizeableComponent {
 render () {
    return (
      <div>
			<PageHeader
				title={<div style={{fontSize: '24px'}}> James Brady </div>}
				subTitle={<Row className='secondary-color' type='flex' justify='center' style={{fontSize: '18px', verticalAlign: 'middle', marginTop: '1px'}}> Software Engineer </Row>}
				ghost={true}
				extra={
					<Row type='flex' justify='center' align='middle'>
						{MenuData.map((cur, i) => (
							<Button className='white-background primary-color' style={{marginRight: '8px'}} href={cur.link} target='_blank' key={i}>
								{cur.icon && <Icon style={{fontSize: '20px', marginTop: '5px'}} type={cur.icon}/>}
								{cur.text && <div style={{fontSize: '20px'}}> {cur.text} </div>}
							</Button>
						))}
					</Row>
				}
			/>

		<div className='primary-background fill-screen'>
			<div style={{paddingLeft: '2vw', paddingRight: '2vw', paddingTop: '8vh', paddingBottom: '2vh'}}>
				<Description justify='center'/>
			</div>
		</div>
        </div>
    );
  }
}