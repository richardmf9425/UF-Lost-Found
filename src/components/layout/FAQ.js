import React, { useState } from 'react';

function FAQ() {
	const [ active, toggleActive ] = useState(false);
	const [ active1, toggleActive1 ] = useState(false);
	const [ active2, toggleActive2 ] = useState(false);
	const [ active3, toggleActive3 ] = useState(false);
	const [ active4, toggleActive4 ] = useState(false);

	return (
		<div className="FAQ-section ">
			<div class="container-faq">
				<h2 className="faq-header">Frequently Asked Questions</h2>

				<div className="accordion">
					<div className="accordion-item">
						<a onClick={() => toggleActive(!active)} className={active ? 'active' : ''}>
							What should I do if I find a lost item?
						</a>
						<div className={active ? ' content active' : 'content'}>
							<p>
								If you find a lost item, you should go the the 'Items Lost' list, and check to see if
								someone has submitted a post, if not then you should add it to the 'Items Found' List
								and just give a brief description without giving away any details.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive1(!active1)} className={active1 ? 'active' : ''}>
							How do I claim a lost item?
						</a>
						<div className={active1 ? ' content active' : 'content'}>
							<p>
								Click on the item and fill out the Claim Form, the person who found it should contact
								you soon.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive2(!active2)} className={active2 ? 'active' : ''}>
							What if someone else claimed my item before me?
						</a>
						<div className={active2 ? ' content active' : 'content'}>
							<p>
								All claims are stored in the UF database and any concerns can be directed to the
								Gainsville PD or UF Honor Court.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive3(!active3)} className={active3 ? 'active' : ''}>
							What if no one claims the item I found?
						</a>
						<div className={active3 ? ' content active' : 'content'}>
							<p>
								Posts are automatically deleted after 45 days, if by this time no one has claimed it,
								you have the right to keep it.
							</p>
						</div>
					</div>
					<div className="accordion-item">
						<a onClick={() => toggleActive4(!active4)} className={active4 ? 'active' : ''}>
							How safe is this?
						</a>
						<div className={active4 ? ' content active' : 'content'}>
							<p>Super safe.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
