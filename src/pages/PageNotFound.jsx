import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<>
			<Navbar />
			<main className="notfound-wrapper">
				<div className="notfound-content">
					<h1 style={{ margin: 0, lineHeight: 1, fontSize: '92px' }}>404</h1>
					<p style={{ fontSize: 20, opacity: 0.9, marginTop: 12 }}>Sorry, we couldn't find that page.</p>
					<p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 10 }}>It might have been removed or you mistyped the address.</p>
					<div style={{ marginTop: 20 }}>
						<Link to="/" className="btn-primary" style={{ padding: '10px 18px', display: 'inline-block' }}>Go back home</Link>
					</div>

					{/* Explanatory icons */}
					<div className="nf-icons" role="group" aria-label="404 help options">
						<div className="nf-icon">
							<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="6"/></svg>
							<div className="nf-label"><strong>Check the URL</strong><div>Typos are common — try re-typing the address.</div></div>
						</div>
						<div className="nf-icon">
							<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12"/></svg>
							<div className="nf-label"><strong>Go home</strong><div>Return to the home page and start over.</div></div>
						</div>
						<div className="nf-icon">
							<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 10l5-3 5 3"/><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2v8"/></svg>
							<div className="nf-label"><strong>Contact support</strong><div>Need help? Let us know — we'll assist.</div></div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default PageNotFound