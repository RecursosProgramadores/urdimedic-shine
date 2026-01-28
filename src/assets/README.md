# 📁 Carpeta de Imágenes - URDIMEDIC

Sube tus fotos en las siguientes carpetas:

## 📂 Estructura de carpetas

```
src/assets/
├── consultorio/          ← Fotos del consultorio y equipos
│   ├── fachada.jpg
│   ├── sala-espera.jpg
│   ├── consultorio-principal.jpg
│   └── equipos-medicos.jpg
│
├── equipo/               ← Fotos del equipo médico
│   ├── dr-marco.jpg
│   ├── kevin.jpg
│   ├── paola.jpg
│   └── equipo-completo.jpg
│
├── familia/              ← Fotos de la familia Urbina Díaz
│   ├── fundadores.jpg
│   ├── familia-completa.jpg
│   └── historia.jpg
│
├── testimonials/         ← Fotos de pacientes (con su permiso)
│   ├── paciente1.jpg
│   ├── paciente2.jpg
│   └── ...
│
└── logo/                 ← Logos de URDIMEDIC
    ├── logo-completo.png
    ├── logo-blanco.png
    └── icono.png
```

## 📋 Instrucciones

1. **Sube las fotos** a la carpeta correspondiente
2. **Nombra los archivos** de forma descriptiva (ej: `dr-marco-consultorio.jpg`)
3. **Formatos recomendados**: JPG, PNG, WebP
4. **Tamaño recomendado**: 
   - Fotos de personas: 400x400px (cuadradas)
   - Fotos de consultorio: 800x600px o 1200x800px
   - Logo: PNG con fondo transparente

## 🖼️ Cómo usar las imágenes en el código

Después de subir una imagen, impórtala así:

```tsx
// En el componente donde quieras usarla:
import miImagen from "@/assets/consultorio/fachada.jpg";

// Luego úsala:
<img src={miImagen} alt="Fachada del consultorio" />
```

## ✅ Checklist de fotos sugeridas

### Consultorio
- [ ] Fachada exterior
- [ ] Sala de espera
- [ ] Consultorio principal
- [ ] Equipos de diagnóstico (OCT, topógrafo, etc.)

### Equipo Médico
- [ ] Dr. Marco Urbina (foto profesional)
- [ ] Kevin Urbina
- [ ] Paola Urbina
- [ ] Foto grupal del equipo

### Familia / Historia
- [ ] Fundadores: Hermelinda y Marco Antonio
- [ ] Familia Urbina Díaz actual
- [ ] Foto histórica de Óptica Díaz (1998)

### Testimonios (con permiso del paciente)
- [ ] 4-6 fotos de pacientes satisfechos
