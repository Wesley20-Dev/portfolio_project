"use client";
// components/WebGLBackground.tsx
// Animated pink dot-grid that reacts to mouse position.
// Drop-in replacement for AntiGravityBackground.

import { useEffect, useRef } from "react";

const VERT = `
  attribute vec2 a_pos;
  varying   vec2 v_uv;
  void main() {
    v_uv        = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  varying vec2  v_uv;
  uniform float u_time;
  uniform vec2  u_res;
  uniform vec2  u_mouse;
  uniform float u_light;

  float rnd(vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv  = v_uv;
    vec2 st  = uv * 50.0;
    vec2 gid = floor(st);
    vec2 gf  = fract(st);

    vec3 darkBg  = vec3(0.0);
    vec3 lightBg = vec3(1.0, 0.973, 0.988);
    vec3 bg      = mix(darkBg, lightBg, u_light);
    vec3 dotCol  = vec3(1.0, 0.078, 0.576);   /* #ff1493 */

    vec2  mUV  = u_mouse / u_res;
    float dist = length(uv - mUV);
    float pulse= 0.5 + 0.5 * sin(u_time * 1.8 + rnd(gid) * 6.28);

    float r     = 0.035 * (0.5 + 0.5 * pulse);
    float hover = smoothstep(0.28, 0.0, dist);
    r          += hover * 0.10;

    float d   = length(gf - 0.5);
    float dot = 1.0 - smoothstep(r - 0.012, r + 0.012, d);

    float baseAlpha = mix(0.18, 0.10, u_light);
    vec3 col  = mix(bg, dotCol, dot * (baseAlpha + hover * 0.82));
    col      += dotCol * hover * mix(0.03, 0.015, u_light);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function mkShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, mkShader(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, mkShader(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos   = gl.getAttribLocation(prog, "a_pos");
    const uTime  = gl.getUniformLocation(prog, "u_time");
    const uRes   = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uLight = gl.getUniformLocation(prog, "u_light");

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = innerHeight - e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    function draw(t: number) {
      t *= 0.001;
      canvas!.width  = innerWidth;
      canvas!.height = innerHeight;
      gl!.viewport(0, 0, innerWidth, innerHeight);
      gl!.useProgram(prog);
      gl!.enableVertexAttribArray(aPos);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
      gl!.vertexAttribPointer(aPos, 2, gl!.FLOAT, false, 0, 0);
      gl!.uniform1f(uTime,  t);
      gl!.uniform2f(uRes,   innerWidth, innerHeight);
      gl!.uniform2f(uMouse, mx, my);
      gl!.uniform1f(
        uLight,
        document.documentElement.getAttribute("data-theme") === "light" ? 1.0 : 0.0
      );
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
