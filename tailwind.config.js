module.exports = {
  content:[
    "./layouts/**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
          '82': '17rem',
          '84': '18rem',
          '86': '19rem',
          '88': '20rem',
          '90': '22.5rem',
          '92': '22rem',
          '96': '24rem',
          '120': '28rem',
          '128': '32rem',
          '135': '30rem', 
          '138': '32rem', 
          '140': '33rem',
          '144': '36rem', 
          '160': '40rem', 
          '162': '41rem',
          '168': '44rem',
          '180': '48rem',
          '182': '49rem',
          '184': '50rem',
          '186': '51rem',          
          '192': '48rem', 
          '194': '48.5rem',
          '198': '49rem',
          '200': '50rem',
          '202': '50.5rem',
          '204': '51rem',
          '208': '52rem',
          '210': '52.5rem',
          '212': '53rem',
          '214': '53.5rem',
          '216': '54rem',
          '224': '56rem', 
          '256': '64rem', 
          '288': '72rem',
          '320': '80rem',
          '340': '88rem',
          '384': '96rem',
          '512': '128rem',
          '640': '160rem',
          '644': '164rem',
          '648': '168rem',
          '768': '192rem',
          '9/20': '49.5%',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    
  },
  plugins:[]
} 
