precision mediump float;

uniform float time;
uniform vec2 resolution;

void main(){
    vec2 p=gl_FragCoord.xy/min(resolution.x,resolution.y)*.7-.5;
    vec3 color;
    for(float i=0.;i<3.;i++){
        for(float j=1.;j<10.;j++){
            
            p.x+=.1/(i+j)*sin(j*10.*p.y+time+cos((time/(15.*j))*j+i));
            p.y+=.1/(i+j)*cos(j*3.*p.x+time+sin((time/(3.*j))*j+i));
        }
        color[int(i)]=abs(p.x+p.y);
    }
    gl_FragColor=vec4(color,1.);
}