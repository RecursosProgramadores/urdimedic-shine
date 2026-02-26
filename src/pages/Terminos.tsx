import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terminos = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20">
                <div className="section-container max-w-4xl">
                    <h1 className="text-4xl font-bold text-primary mb-8 text-center">Términos y Condiciones</h1>

                    <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introducción</h2>
                            <p>
                                Bienvenido al sitio web de URDIMEDIC. Al acceder y utilizar nuestro sitio, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso del Sitio</h2>
                            <p>
                                El contenido de este sitio es para su información general y uso personal. Está sujeto a cambios sin previo aviso. Queda prohibido el uso no autorizado de este sitio web que pueda dar lugar a una reclamación por daños y perjuicios o ser un delito penal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Servicios Médicos</h2>
                            <p>
                                La información proporcionada en este sitio no constituye un diagnóstico médico. Siempre debe consultar con nuestros profesionales oftalmólogos para cualquier duda relacionada con su salud visual.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Citas y Cancelaciones</h2>
                            <p>
                                Las citas reservadas a través de WhatsApp o nuestro formulario están sujetas a confirmación. Agradecemos nos informe con al menos 24 horas de antelación si necesita reprogramar o cancelar su cita.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Propiedad Intelectual</h2>
                            <p>
                                Este sitio contiene material que es propiedad nuestra o licenciado a nosotros. Este material incluye, pero no se limita a, el diseño, maquetación, apariencia y gráficos. La reproducción está prohibida salvo de conformidad con el aviso de copyright.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terminos;
