const images = import.meta.glob<string>("../assets/tratamentos/*.jpg", { eager: true, import: "default" });
const img = (slug: string, n: number) => images[`../assets/tratamentos/${slug}-${n}.jpg`] ?? "";

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  indications: string[];
  gallery: string[];
};

const base: Omit<Treatment, "gallery">[] = [
  { slug: "botox", title: "Botox", short: "Suaviza linhas de expressão e ajuda a prevenir marcas profundas.", summary: "A toxina botulínica relaxa de forma controlada os músculos responsáveis pelas linhas de expressão. Com aplicação precisa e doses individualizadas, o rosto fica mais descansado, preservando a naturalidade dos seus movimentos.", indications: ["Linhas da testa e entre as sobrancelhas", "Pés de galinha", "Prevenção de marcas mais profundas"] },
  { slug: "preenchimentos", title: "Preenchimentos", short: "Devolve volume, proporção e contorno com naturalidade.", summary: "Com ácido hialurônico, repomos volume e definimos contornos de forma sutil. O planejamento respeita a proporção do seu rosto para realçar seus traços, sem excessos.", indications: ["Lábios", "Olheiras e região malar", "Contorno de mandíbula e queixo"] },
  { slug: "bioestimuladores", title: "Bioestimuladores de colágeno", short: "Estimula firmeza, sustentação e qualidade da pele.", summary: "Os bioestimuladores incentivam a própria pele a produzir colágeno. A melhora é gradual e progressiva, trazendo mais firmeza e sustentação com aparência natural.", indications: ["Flacidez leve a moderada", "Perda de sustentação facial", "Melhora da qualidade da pele"] },
  { slug: "skinboosters", title: "Skinboosters", short: "Promove hidratação profunda, viço e melhora da textura.", summary: "Microinjeções de ativos hidratantes que melhoram a qualidade da pele de dentro para fora, trazendo viço, maciez e uma textura mais uniforme.", indications: ["Pele desidratada ou opaca", "Linhas finas", "Rosto, pescoço e colo"] },
  { slug: "ultraformer", title: "Ultraformer", short: "Atua na flacidez, no contorno facial e no estímulo de colágeno.", summary: "Tecnologia de ultrassom microfocado que atua nas camadas profundas da pele, estimulando colágeno e auxiliando no tratamento da flacidez e no contorno facial, sem cortes.", indications: ["Flacidez facial e de papada", "Definição do contorno", "Estímulo de colágeno"] },
  { slug: "laser-co2", title: "Laser CO₂", short: "Auxilia na renovação, textura, manchas e rejuvenescimento da pele.", summary: "O laser CO₂ fracionado promove renovação da pele, auxiliando na melhora da textura, de manchas e de cicatrizes. O protocolo é definido conforme seu tipo de pele e rotina.", indications: ["Textura irregular e poros", "Manchas e marcas de acne", "Rejuvenescimento da pele"] },
  { slug: "pdrn", title: "Protocolo Coreano com PDRN", short: "Favorece regeneração, luminosidade e recuperação da pele.", summary: "Inspirado na estética coreana, o protocolo com PDRN favorece a regeneração celular, trazendo luminosidade, hidratação e uma pele com aparência mais saudável.", indications: ["Pele sem viço", "Recuperação pós-procedimentos", "Efeito glow natural"] },
  { slug: "tricologia", title: "Tricologia", short: "Cuidado personalizado para força capilar e saúde do couro cabeludo.", summary: "Avaliação e tratamento do couro cabeludo e dos fios, com protocolos personalizados para queda, enfraquecimento e saúde capilar.", indications: ["Queda de cabelo", "Fios finos e enfraquecidos", "Saúde do couro cabeludo"] },
];

export const treatments: Treatment[] = base.map((t) => ({ ...t, gallery: [1, 2, 3].map((n) => img(t.slug, n)) }));
export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
