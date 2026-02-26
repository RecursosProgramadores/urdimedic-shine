import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidad = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20">
                <div className="section-container max-w-4xl">
                    <h1 className="text-4xl font-bold text-primary mb-8 text-center">Política de Privacidad</h1>

                    <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Recopilación de Datos</h2>
                            <p>
                                En URDIMEDIC, valoramos su privacidad. Recopilamos información personal como nombre, teléfono y correo electrónico únicamente cuando usted voluntariamente nos la proporciona a través de nuestro formulario de contacto o WhatsApp para agendar citas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso de la Información</h2>
                            <p>
                                La información recopilada se utiliza exclusivamente para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Gestionar y confirmar sus citas médicas.</li>
                                <li>Responder a sus consultas y dudas.</li>
                                <li>Mejorar nuestros servicios de atención al paciente.</li>
                                <li>Cumplir con las normativas legales de salud vigentes.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Protección de Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la pérdida o la alteración. Sus datos médicos son tratados con la más estricta confidencialidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. No Divulgación a Terceros</h2>
                            <p>
                                No vendemos, comercializamos ni transferimos su información personal a terceros ajenos a nuestra organización, salvo cuando sea necesario para cumplir con un requerimiento legal o proporcionar el servicio médico solicitado.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sus Derechos</h2>
                            <p>
                                Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales de nuestra base de datos en cualquier momento. Para ello, puede contactarnos a través de los canales oficiales proporcionados en este sitio.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacidad;
