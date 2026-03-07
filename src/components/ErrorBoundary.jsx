import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidCatch(error, info) {
        console.error('[YPO ErrorBoundary]', error, info)
    }

    render() {
        if (this.state.error) {
            return (
                <div style={{
                    minHeight: '60vh', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                    padding: '40px 24px', fontFamily: 'Inter, sans-serif'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
                    <h2 style={{ color: '#6B2B7D', marginBottom: '10px' }}>Something went wrong</h2>
                    <p style={{ color: '#8B7FA0', maxWidth: '380px', lineHeight: 1.75, marginBottom: '24px' }}>
                        This section encountered an error. Try refreshing the page.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => { this.setState({ error: null }); window.location.reload() }}
                    >
                        Reload Page
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}
