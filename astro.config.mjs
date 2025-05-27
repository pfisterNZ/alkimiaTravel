// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar:{
        enabled: false
    },
    integrations: [
        // Habilitar la integración de Flowbite
        {
            name: 'flowbite',
            options: {
                // Opciones de configuración si son necesarias
            }
        }
    ]
});
