const Disease = require('../models/Disease');
const Faq = require('../models/Faq');
const Link = require('../models/Link');

async function initialDiseases() {
    const data = await Disease.find().lean();
    if (data.length == 0) {
      const diseases = [
        { name: 'Dermatitis Atópica', description: "La dermatitis atópica puede producir pequeñas protuberancias rojas que pueden generar mucha picazón. Cuando se rascan, es posible que las protuberancias liberen líquido y que se forme una costra. La dermatitis atópica ocurre con mayor frecuencia donde la piel se flexiona: dentro de los codos, detrás de las rodillas y delante del cuello.", symptoms: ["Enrojecimiento en la piel", "Picazón en la piel" ] },
        { name: 'Asma', description: "El asma es una afección en la que las vías respiratorias se estrechan e hinchan y pueden producir mucosidad adicional. Esto puede dificultar la respiración y provocar tos, un silbido (sibilancia) al exhalar y falta de aire. Para algunas personas, el asma es una molestia menor. Para otras puede ser un problema considerable que interfiere en las actividades cotidianas y que puede producir ataques de asma que pongan en riesgo la vida.", symptoms: ["Falta de aire","Silbido en el pecho","Dolor en el pecho","Tos"] },
        { name: 'Alérgia', description: "Las alergias aparecen cuando el sistema inmunitario reacciona ante una sustancia extraña (como el polen, el veneno de abejas o la caspa de las mascotas) o un alimento que no provoca una reacción en la mayoría de las personas. Tu sistema inmunitario produce sustancias conocidas como «anticuerpos». Cuando tienes alergias, tu sistema inmunitario produce anticuerpos que identifican a un alérgeno en particular como dañino, incluso si no lo es. Cuando entras en contacto con el alérgeno, la reacción de tu sistema inmunitario puede hacer que la piel, los senos paranasales, las vías respiratorias o el aparato digestivo se inflamen.", symptoms: ["Picazón en la piel","Falta de aire","Congestión nasal","Tos"] },
        { name: 'Ataque Cardíaco', description: "El ataque cardíaco se produce cuando se bloquea el flujo de sangre hacia el corazón. Por lo general, el bloqueo es una acumulación de grasa, colesterol y otras sustancias que forman una placa en las arterias que alimentan el corazón (arterias coronarias).", symptoms: ["Dolor en el pecho","Sudor frío","Mareos","Fatiga"] },
        { name: 'Resfriado Común', description: "El resfriado común es una infección viral de la nariz y la garganta (tracto respiratorio superior). Por lo general es inofensivo, aunque puede que no lo parezca. Muchos tipos de virus pueden causar un resfriado común.", symptoms: ["Congestión nasal","Dolor generalizado","Dolor de garganta","Perdida de olfato"] },
        { name: 'Gripe (Influenza)', description: "La influenza es una infección viral que ataca el sistema respiratorio — la nariz, la garganta y los pulmones. También se conoce como gripe, pero es diferente a los virus al estómago que causan diarrea y vómitos. En la mayoría de las personas, la gripe desaparece por sí sola. Pero a veces esta enfermedad y sus complicaciones pueden ser mortales.", symptoms: ["Sudor frío","Escalofríos","Dolor generalizado","Fiebre > 38","Dolor de garganta","Fatiga"] },
        { name: 'COVID-19', description: "Los coronavirus son una familia de virus que pueden causar enfermedades como el resfriado común, el síndrome respiratorio agudo grave (SARS, por sus siglas en inglés), y el síndrome respiratorio de Oriente Medio (MERS, por sus siglas en inglés). En 2019 se identificó un nuevo coronavirus como la causa de un brote de enfermedades que se originó en China. Este virus ahora se conoce como el síndrome respiratorio agudo grave coronavirus 2 (SARS-CoV-2). La enfermedad que causa se llama enfermedad del coronavirus 2019 (COVID-19).", symptoms: ["Falta de aire","Dolor en el pecho","Escalofríos","Dolor Generalizado","Fiebre > 38","Perdida de olfato","Tos","Fatiga"] },
        { name: 'Bronquitis', description: "La bronquitis es una inflamación del revestimiento de los bronquios que llevan el aire hacia adentro y fuera de los pulmones. Las personas que tienen bronquitis suelen toser mucosidad espesa y, tal vez, decolorada. La bronquitis puede ser aguda o crónica.", symptoms: ["Escalofríos","Tos","Fatiga"] },
        { name: 'Sinusitis', description: "La sinusitis aguda hace que los espacios dentro de la nariz (senos paranasales) se inflamen e hinchen. Esto interfiere en el drenaje y provoca la acumulación de moco. La sinusitis aguda puede dificultar la respiración por la nariz. El área alrededor de los ojos y la cara puede sentirse hinchada y podrías tener dolor facial pulsante o dolor de cabeza.", symptoms: ["Congestión nasal","Dolor de garganta","Perdida de olfato","Tos"] },
        { name: 'Neumonía', description: "La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar. Diversos microrganismos, como bacterias, virus y hongos, pueden provocar neumonía.", symptoms: ["Falta de aire","Dolor en el pecho","Escalofríos","Fiebre > 38","Tos","Fatiga"] },
      ];

      for (const disease of diseases) {
        const newDisease = new Disease({});
        newDisease.name = disease.name;
        newDisease.description = disease.description;
        newDisease.symptoms = disease.symptoms;
        await newDisease.save();
      }
    }
}

async function initialFaqs() {
    const data = await Faq.find().lean();
    if (data.length == 0) {
      const faqs = [
        { name: '¿Cómo puedo saber si mi peso es adecuado según mi estatura?', description: "Para saber si se tiene el peso adecuado según la estatura, se debe obtener el llamado índice de masa corporal (IMC), que es una relación entre el peso en kilos y la talla o altura al cuadrado. Así, por ejemplo, una mujer que mide 1,70 y pesa 62 kg tendría un Índice de Masa Corporal de 21,45 Kg/m2 que sería un IMC ideal por estar entre los 20 y los 24 kg/m2. Podemos considerar un peso normal o adecuado para la talla cuando el resultado se encuentra entre 20-25 kg/m2, se considerará sobrepeso hasta 29 kg/m2 y consideraremos que se tiene obesidad cuando hay resultados superiores a 30 kg/m2." },
        { name: '¿Qué enfermedades puede desencadenar el sobrepeso y la obesidad?', description: "El sobrepeso y la obesidad son un fenómeno en creciente aumento en los países occidentales y su frecuencia va en aumento, constituyendo actualmente una auténtica epidemia y uno de los problemas de salud pública emergentes más frecuentes. Los principales factores favorecedores de la actual epidemia de obesidad son la ingesta excesiva de calorías y un gasto muy reducido en forma de actividad física tanto por el trabajo como en el tiempo libre." },
        { name: '¿Cuánto tiempo debe pasar entre la cena y la hora de acostarse?', description: "En general, para una buena alimentación, las cenas deberán ser ligeras o livianas. De esta manera, mejorará nuestra digestión y el sueño será más reparador. En la mayoría de los casos, la cantidad energética de la cena no debería constituir más del 20% de la cantidad de calorías diarias ingeridas, dejando la mayor cantidad de calorías para el desayuno y la comida. Será preferible realizar la cena al menos dos horas antes de acostarse, dejando así tiempo suficiente para que se haga la digestión y esta no interfiera con el sueño." },
        { name: '¿Qué debo hacer en caso de una intoxicación por comer una seta venenosa?', description: "Los primeros síntomas de intoxicación por setas suelen ser náuseas, dolor abdominal, vómitos y diarrea. Es posible que los síntomas se presenten de inmediato después de haber comido la seta o que aparezcan varias horas después. Si sospechamos que se ha sufrido una intoxicación por setas, es aconsejable llamar al número de emergencias 112 o llevar a la persona intoxicada al hospital más cercano. Si es posible, con algunas muestras de las setas que comió." },
        { name: '¿Cómo puedo reducir el dolor de una contractura sin tomar ningún tipo de medicación?', description: "La contractura supone una contracción involuntaria y continuada de un músculo que provoca dolor ante el movimiento y, en los casos más graves, incluso dolor en reposo. Algunas zonas muy frecuentes de contractura muscular son la cervical, en la parte posterior del cuello, y la lumbar, que origina el conocido dolor de lumbago. El tratamiento de las contracturas musculares son los antiinflamatorios (ibuprofeno, diclofenaco…) y los relajantes musculares como benzodiacepinas, precisándose en general varios días hasta su remisión. El calor local suave y seco alivia la contractura y ayuda a relajar el músculo." },
        { name: '¿Los dentrifricos limpiadores pueden dañar el esmalte?', description: "Al igual que la piel, cada persona tiene una tonalidad dental distinta. El origen de esta coloración se encuentra en la propia genética, pero la tonalidad de la dentadura también puede verse alterada por el antecedente de la toma de antibióticos o por consumir café, té, vino tinto o tabaco de manera reiterada, que son del proceso natural de oscurecimiento de los dientes. Los dentífricos blanqueadores han ido proliferando en los últimos años en el mercado tienen un cierto componente abrasivo o irritante para el esmalte dental y solo son eficaces contra las manchas adheridas a la superficie del esmalte y a la parte más superficial de la dentina." },
        { name: '¿Qué hacer si tienes una digestión pesada?', description: "En términos generales, hay varios consejos que deberíamos seguir para evitar pesadez después de las comidas: Comer despacio, masticar los alimentos de manera adecuada, evitar comer únicamente en tres comidas; realizar cinco comidas diarias: recuerda que el picoteo continuo hace que el tubo digestivo trabaje constantemente y podría propiciar un mal funcionamiento con el tiempo, no es aconsejable ingerir comidas muy elaboradas o sazonadas, con mucho picante o preparadas de forma industrial. La mayoría de estos alimentos son de difícil digestión." },
        { name: '¿Por qué estoy tan cansado?', description: "La astenia o cansancio puede tener su origen en innumerables causas. Es muy popular la frase «tendrás las defensas bajas», pese a que realmente es una afirmación que no tiene demasiada base científica. La propia primavera puede causar una sensación de cansancio o fatiga, conocida como astenia primaveral. Deberemos consultar con el profesional cuando esta sensación de cansancio y de falta de energía se prolongue en el tiempo, es decir, cuando ya llevemos más de uno o dos meses y no la reconozcamos como normal en nuestro cuerpo." },
        { name: '¿Se puede prevenir la diabetes?', description: "La diabetes mellitus tipo 1 (DM1) se inicia generalmente en niños y adultos jóvenes, de aquí su nombre de diabetes juvenil. La diabetes mellitus tipo 2 (DM2) se inicia generalmente en adultos maduros, de aquí el nombre popular de diabetes de la gente mayor. Es la forma más común de diabetes, y se da entre un 90%-95% de todos los casos. La diabetes mellitus tipo 2 se debe a la incapacidad del cuerpo de producir insulina o de poder utilizar de forma adecuada la propia insulina. Combatir la obesidad y el sedentarismo con la práctica de ejercicio reduce su aparición hasta el 58% en población con riesgo de sufrirla." },
        { name: '¿Cómo debo transportar la compra para evitar lesiones causadas por el peso?', description: "Para realizar una carga correcta de las bolsas, los colegios de fisioterapeutas recomiendan recoger aquellos productos que se encuentren por debajo de las rodillas, flexionando las piernas en lugar de doblar la espalda. A la hora de transportar los bultos, éstos se deben llevar lo más cerca posible del cuerpo para disminuir la tensión en la espalda y los brazos, y aliviar el esfuerzo de la columna. También será conveniente evitar levantar objetos pesados más allá de la altura del pecho. Es importante repartir el peso de forma equilibrada para que los dos brazos soporten una carga similar y la espalda se sitúe lo más recta posible." },
      ];

      for (const faq of faqs) {
        const newFaq = new Faq({});
        newFaq.name = faq.name;
        newFaq.description = faq.description;
        await newFaq.save();
      }
    }
  }

  async function initialLinks() {
      const data = await Link.find().lean();
      if (data.length == 0) {
        const links = [
          { name: 'Organización Mundial de la Salud', description: "Institución Gubernamental", href: "https://www.who.int/es" },
          { name: 'Medline Plus', description: "Salud General", href: "https://medlineplus.gov/spanish/healthtopics.html" },
          { name: 'Cuidate +', description: "Salud General", href: "https://cuidateplus.marca.com" },
          { name: 'Mejor con Salud', description: "Cuidados y Buenos Hábitos", href: "https://mejorconsalud.as.com" },
          { name: 'Vitónica', description: "Fitness y Lifestyle", href: "https://www.vitonica.com" },
          { name: 'Escuela de Pacientes', description: "Salud General", href: "https://escueladepacientes.es" },
          { name: 'Agencia Española de Medicamentos y Productos Sanitarios', description: "Institución Gubernamental", href: "https://www.aemps.gob.es" },
          { name: 'Salupedia', description: "Salud General", href: "http://www.salupedia.org" },
        ];

        for (const link of links) {
          const newLink = new Link({});
          newLink.name = link.name;
          newLink.description = link.description;
          newLink.href = link.href;
          await newLink.save();
        }
      }
    }

module.exports.initialDiseases = initialDiseases;
module.exports.initialFaqs = initialFaqs;
module.exports.initialLinks = initialLinks;
