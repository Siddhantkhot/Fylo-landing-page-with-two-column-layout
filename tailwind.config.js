/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {fontFamily:{ 
                         'sans':['Raleway'],
                         'open':['Open Sans']
                        },
               colors:{
                         'VeryDarkBlue': ['hsl(243, 87%, 12%)'],
                         'DesaturatedBlue': ['hsl(238, 22%, 44%)'],
                         'BrightBlue': ['hsl(224, 93%, 58%)'],
                         'ModerateCyan':['hsl(170, 45%, 43%)'],
                         'LightGrayishBlue':[' hsl(240, 75%, 98%)'],      
                         'LightGray': ['hsl(0, 0%, 75%)']
                        },
              fontSize:{
                        's':['12px'],
                        'se':['0.62rem'],
                        'd':['0.5rem']
                       },
            fontWeight:{
                        '400':['400'],
                        '700':['700'],
                      },
                      maxWidth:{'21.5':['375px'],
                          'full':['100%']
                      },
                width:{'56':['8rem'],
                '25':['16rem'],
                '21':['275px'],
                '98':['656px'],
                '19':['310px'],
                '15':['170px'],
                '23':['350px'],
                '27':['370px'],
                'f':['100%'],
                },
            lineHeight:{'11':['3.5rem']},
            backgroundImage:{'mobile':"url(/images/bg-curve-mobile.svg)",
                              'desktop':"url('/images/bg-curve-desktop.svg')",

            },
            minWidth:{'full':['100%']},
            margin:{'103':['95rem'],'120':['47rem'],'121':['50rem']},
            padding:{'110':['53rem'],'83':['35rem']},
            
        },
        },
  plugins: [],
}

