module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
      },
      fontSize: {
        "4.5xl" : "40px",
        "3.75": "15px"
      },
      colors: {
        Primary: "#4361ee",
      },
      padding: {
        "2.5": "10px",
        "0.1": "1px",
        "3.5": "14px",
        "1.8": "7px"
      },
      width: {
        "97": "388px",
        "3.5": "14px",
        "8.75": "35px"
      },
      height: {
        "4.5": "18px",
        "3.5": "14px",
      },
      boxShadow: {
        '3xl': '0 10px 20px -10px #4361ee',
      },
      letterSpacing: {
        'widem': "0.0312rem"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
