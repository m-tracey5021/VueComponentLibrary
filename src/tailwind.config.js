module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                custom: {
                    yellow: {
                        1: '#ffeca1',
                        2: '#ebd994',
                        3: '#baab6e'
                    }
                }
            },
            transitionProperty: {
                'height': 'height'
            },
            animation: {
                'wiggle': 'wiggle 2s linear',
                'small-ping': 'small-ping 0.5s ease-out',
                'grow': 'grow 0.5s ease-out'
                
            },
            keyframes: {
                'wiggle': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'small-ping': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.3)', opacity: '0'}
                },
                'grow': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' }
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
