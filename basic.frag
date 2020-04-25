#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 uv=gl_FragCoord.xy/u_resolution.xy;
    
    // vec3 color=.5+.5*cos(u_time+uv.xyz);
    vec3 color=.5+.5*cos(u_time+uv.xyx+vec3(0,2,4));
    gl_FragColor=vec4(color,1.);
}