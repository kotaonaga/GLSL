// void mainImage(out vec4 fragColor,in vec2 fragCoord)
// {
    //     // Normalized pixel coordinates (from 0 to 1)
    //     vec2 uv=fragCoord/iResolution.xy;
    
    //     // Time varying pixel color
    //     vec3 col=.5+.5*cos(iTime+uv.xyx+vec3(0,2,4));
    
    //     // Output to screen
    //     fragColor=vec4(col,1.);
// }

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