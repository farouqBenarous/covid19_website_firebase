import * as Joi from 'joi';


// todo : Work in schema for other languages


export const Covid19PsycschemaEn = Joi.object().keys({
    birthDate: Joi.date().required(),
    gender: Joi.string().equal(['Male', 'female']).required(),
    status: Joi.string().equal(['single', 'Married', 'Divorced', 'Widower', 'Separate']),
    children: Joi.object().keys({children: Joi.bool().required(), number: Joi.number().integer().optional()}),
    functionType: Joi.string().equal(['Medical', 'Paramedical', 'Versatile agent']).required(),
    services: Joi.object().keys({
        other: Joi.string().required(),
        value: Joi.string().equal(['UMC', 'Resuscitation unit', 'ORL', 'Kidney institute', 'Orthopedics']).required()
    }).required(),
    participationType: Joi.string().equal(['Voluntary', 'Upon requisition']).required(),
    participationFeeling: Joi.string().min(2).required(),
    participationJobFeelings: Joi.string().equal(['Felt devalued', 'Felt reassessed']).required(),
    workRythm: Joi.string().min(2).required(),
    exposureDegree: Joi.string().equal(['Permanent', 'Intermittent', 'Rare']).required(),
    protectionMeansAppreciationAtWork: Joi.string().equal(['Unsatisfactory', 'Satisfactory', 'Very satisfactory']).required(),
    firstReaction: Joi.string().min(2).required(),
    concernsRate: Joi.string().equal(['Not worried', 'Slightly worried', 'Moderately worried', 'worried', 'Unmanageable']).required(),
    symptomsPsychic: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['Irritability', 'Nervousness', 'Anxiety', 'Feeling of sadness', 'Attention and concentration disorder', 'Insomnia'
            , 'Increased appetite', 'Decreased appetite', 'Loss of appetite', 'Fatigability or loss of energy', 'Fear of dying', 'Loss of going crazy'])).required(),
        other: Joi.string().required()
    }).required(),
    symptomsPhysical: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['Palpitations', 'Sweats', 'Feeling of suffocation, of strangulation', 'Dizziness, feeling of fainting'
            , 'Abdominal bloating', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Hot flushes', 'Tingling', 'Headache'])).required(),
        other: Joi.string().required()
    }).required(),
    sleeping: Joi.object().keys({
        sleep: Joi.array().items(Joi.string().equal(['Satisfactory', 'Interrupted', 'You are slow to fall asleep', 'You wake up very early than usual', 'Quasi-total insomnia'])).required(),
        nightmares: Joi.string().equal(['Related to your work day', 'Not related to your work day']).required()
    }).required(),
    flashbacks: Joi.object().keys({
        answer: Joi.string().equal(['No', 'Yes']).required(),
        explanation: Joi.string().equal(['Daily', 'Weekly']).required(),
        other: Joi.string().required()
    }).required(),
    deathWitnessed: Joi.object().keys({
        answer: Joi.string().equal(['No', 'Yes']).required(),
        explanation: Joi.string().optional()
    }).required(),
    imageDeceasedPerson: Joi.object().keys({
        answer: Joi.string().equal(['No', 'Yes']).required(),
        frequency: Joi.string().optional(),
        feeling: Joi.string().min(2).required(),
    }).required(),
    workMotivation: Joi.string().equal(['Did not change', 'Low', 'Medium', 'Important']).required(),
    interestProfessionalPractice: Joi.object().keys({
        answer: Joi.string().equal(['No', 'Yes']).required(),
        explanation: Joi.string().optional()
    }).required(),
    feelingWorkMorning: Joi.object().keys({
        answer: Joi.string().equal(['Disgust', 'Indifference', 'Enthusiasm']).required(),
        other: Joi.string().required()
    }),
    physicalFatigue: Joi.string().equal(['No', 'Light', 'Average', 'Important']).required(),
    morallySaturated: Joi.string().equal(['No', 'Slightly', 'Moderately', 'Significantly']).required(),
    jobPerformance: Joi.string().equal(['Increased', 'Same', 'Medium', 'Low', 'Null']).required(),
    assignmentHost: Joi.object().keys({
        answer: Joi.string().equal(['Still at home']).required(),
        other: Joi.string().required()
    }),
    feelAwayFromFamily: Joi.string().min(2).required(),
    influencedRelationshipFamily: Joi.object().keys({
        answer: Joi.string().equal(['No', 'Yes']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyServiceFeedback: Joi.object().keys({
        answer: Joi.string().equal(['Negative', 'Positive']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyOpinionInfluencePerformance: Joi.object().keys({
        answer: Joi.string().equal(['Negative', 'Positive']).required(),
        explanation: Joi.string().optional()
    }).required()
})

export const Covid19PsycschemaFr = Joi.object().keys({
    birthDate: Joi.date().required(),
    gender: Joi.string().equal(['Homme', 'Femme']).required(),
    status: Joi.string().equal(['Célibataire', 'Marié', 'Divorcé', 'Veuf', 'Séparé']),
    children: Joi.object().keys({children: Joi.bool().required(), number: Joi.number().integer().optional()}),
    functionType: Joi.string().equal(['Médical', 'Paramédical', 'Agent polyvalent']).required(),
    services: Joi.object().keys({
        other: Joi.string().required(),
        value: Joi.string().equal(['UMC', 'Unité de réanimation', 'ORL', 'Institut du rein', 'Orthopédie']).required()
    }).required(),
    participationType: Joi.string().equal(['Volontaire', 'Sur réquisition']).required(),
    participationFeeling: Joi.string().min(2).required(),
    participationJobFeelings: Joi.string().equal(['Senti dévalué', 'Senti réévalué']).required(),
    exposureDegree: Joi.string().equal(['Permanent', 'Intermittent', 'Rare']).required(),
    workRythm: Joi.string().min(2).required(),
    protectionMeansAppreciationAtWork: Joi.string().equal(['Insatisfaisant', 'Satisfaisant', 'Très satisfaisant']).required(),
    firstReaction: Joi.string().min(2).required(),
    concernsRate: Joi.string().equal(['Pas inquiet', 'Légèrement inquiet', 'Modérément inquiet', 'inquiet', 'Incontrôlable']).required(),
    symptomsPsychic: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['Irritabilité', 'Nervosité', 'Anxiété', 'Sentiment de tristesse', 'Trouble de l attention et de la concentration', 'Insomnie'
            , 'Augmentation de l appétit', 'Diminution de l appétit', 'Perte d appétit', 'Fatigabilité ou perte d énergie', 'Peur de mourir', 'Perte de devenir fou'])).required(),
        other: Joi.string().required()
    }).required(),
    symptomsPhysical: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['Palpitations', 'Sueurs', 'Sensation d étouffement, d étranglement', 'Vertiges, sensation d évanouissement'
            , 'Ballonnements abdominaux', 'Nausées vomissements', 'Diarrhée', 'Constipation', 'Bouffées de chaleur', 'Picotements', 'Maux de tête'])).required(),
        other: Joi.string().required()
    }).required(),
    sleeping: Joi.object().keys({
        sleep: Joi.array().items(Joi.string().equal(['Satisfaisant', 'Interrompu', 'Vous tardez à vous endormir', 'Vous vous réveillez très tôt que d habitude', 'Insomnie quasi-totale'])).required(),
        nightmares: Joi.string().equal(['Lié à votre journée de travail', 'Non lié à votre journée de travail']).required()
    }).required(),
    flashbacks: Joi.object().keys({
        answer: Joi.string().equal(['Non Oui']).required(),
        explanation: Joi.string().equal(['Quotidien', 'Hebdomadaire']).required(),
        other: Joi.string().required()
    }).required(),
    deathWitnessed: Joi.object().keys({
        answer: Joi.string().equal(['Non', 'Oui']).required(),
        explanation: Joi.string().optional()
    }).required(),
    imageDeceasedPerson: Joi.object().keys({
        answer: Joi.string().equal(['Non', 'Oui']).required(),
        frequency: Joi.string().optional(),
        feeling: Joi.string().min(2).required(),
    }).required(),
    workMotivation: Joi.string().equal(['N a pas changé', 'Faible', 'moyen', 'Important']).required(),
    interestProfessionalPractice: Joi.object().keys({
        answer: Joi.string().equal(['Non', 'Oui']).required(),
        explanation: Joi.string().optional()
    }).required(),

    feelingWorkMorning: Joi.object().keys({
        answer: Joi.string().equal(['Dégoût', 'Idifférence', 'Enthousiasme']).required(),
        other: Joi.string().required()
    }),
    physicalFatigue: Joi.string().equal(['Non', 'Léger', 'Moyen', 'Important']).required(),
    morallySaturated: Joi.string().equal(['Non', 'Légèrement', 'Modérément', 'Significativement']).required(),
    jobPerformance: Joi.string().equal(['Augmenté', 'Identique', 'Moyen', 'Faible', 'Nul']).required(),
    assignmentHost: Joi.object().keys({
        answer: Joi.string().equal(['Toujours à la maison']).required(),
        other: Joi.string().required()
    }),
    feelAwayFromFamily: Joi.string().min(2).required(),
    influencedRelationshipFamily: Joi.object().keys({
        answer: Joi.string().equal(['Non', 'Oui']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyServiceFeedback: Joi.object().keys({
        answer: Joi.string().equal(['Négatif', 'Positif']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyOpinionInfluencePerformance: Joi.object().keys({
        answer: Joi.string().equal(['Négatif', 'Positif']).required(),
        explanation: Joi.string().optional()
    }).required()
})


export const Covid19PsycschemaAr = Joi.object().keys({
    birthDate: Joi.date().required(),
    gender: Joi.string().equal(['ذكر', 'مؤنث']).required(),
    status: Joi.string().equal(['أعزب', 'متزوج', 'مطلق', 'أرمل', 'منفصل']),
    children: Joi.object().keys({children: Joi.bool().required(), number: Joi.number().integer().optional()}),
    functionType: Joi.string().equal(['طبي', 'مساعد طبي', 'وكيل متعدد الاستخدامات']).required(),
    services: Joi.object().keys({
        other: Joi.string().required(),
        value: Joi.string().equal(['UMC', 'وحدة الإنعاش', 'ORL', 'معهد الكلى', 'جراحة العظام']).required()
    }).required(),
    participationType: Joi.string().equal(['طوعي', 'عند الطلب']).required(),
    participationFeeling: Joi.string().min(2).required(),
    participationJobFeelings: Joi.string().equal(['فيلت قيمة', 'إعادة تقييم']).required(),
    workRythm: Joi.string().min(2).required(),
    exposureDegree: Joi.string().equal(['دائم', 'متقطع', 'نادر']).required(),
    protectionMeansAppreciationAtWork: Joi.string().equal(['غير مرضٍ', 'مُرضٍ', 'مُرضٍ للغاية']).required(),
    firstReaction: Joi.string().min(2).required(),
    concernsRate: Joi.string().equal(['غير قلق', 'قلق قليلاً', 'قلق بشكل معتدل', 'قلق', 'غير قابل للإدارة']).required(),
    symptomsPsychic: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['التهيج', 'العصبية', 'القلق', 'الشعور بالحزن', 'اضطراب الانتباه والتركيز', 'الأرق'
            , 'زيادة الشهية', 'فقدان الشهية', 'فقدان الشهية', 'التعب أو فقدان الطاقة', 'الخوف من الموت', 'فقدان الجنون'])).required(),
        other: Joi.string().required()
    }).required(),
    symptomsPhysical: Joi.object().keys({
        value: Joi.array().items(Joi.string().equal(['خفقان', 'تعرق', 'شعور بالاختناق , خنق', 'دوار , شعور بالإغماء'
            , 'النفخ البطني', 'الغثيان', 'القيء', 'الإسهال', 'الإمساك', 'الهبات الساخنة', 'الوخز', 'الصداع'])).required(),
        other: Joi.string().required()
    }).required(),
    sleeping: Joi.object().keys({
        sleep: Joi.array().items(Joi.string().equal(['مرض', 'متقطع', 'أنت بطيء في النوم', 'تستيقظ مبكرًا جدًا من المعتاد', 'أرق شبه إجمالي'])).required(),
        nightmares: Joi.string().equal(['مرتبط بيوم عملك', 'غير مرتبط بيوم عملك']).required()
    }).required(),
    flashbacks: Joi.object().keys({
        answer: Joi.string().equal(['لا', 'نعم']).required(),
        explanation: Joi.string().equal(['اسبوعي', 'يومي']).required(),
        other: Joi.string().required()
    }).required(),
    deathWitnessed: Joi.object().keys({
        answer: Joi.string().equal(['لا', 'نعم']).required(),
        explanation: Joi.string().optional()
    }).required(),
    imageDeceasedPerson: Joi.object().keys({
        answer: Joi.string().equal(['لا', 'نعم']).required(),
        frequency: Joi.string().optional(),
        feeling: Joi.string().min(2).required(),
    }).required(),
    workMotivation: Joi.string().equal(['لم يتغير', 'منخفض', 'متوسط', 'مهم']).required(),
    interestProfessionalPractice: Joi.object().keys({
        answer: Joi.string().equal(['لا', 'نعم']).required(),
        explanation: Joi.string().optional()
    }).required(),
    feelingWorkMorning: Joi.object().keys({
        answer: Joi.string().equal(['الاشمئزاز', 'اللامبالاة', 'الحماس']).required(),
        other: Joi.string().required()
    }),
    physicalFatigue: Joi.string().equal(['لا', 'خفيف', 'متوسط', 'مهم']).required(),
    morallySaturated: Joi.string().equal(['لا', 'قليلاً', 'باعتدال', 'بشكل ملحوظ']).required(),
    jobPerformance: Joi.string().equal(['متزايد', 'نفس', 'متوسط', 'منخفض', 'فارغ']).required(),
    assignmentHost: Joi.object().keys({
        answer: Joi.string().equal(['مازلت فالمنزل']).required(),
        other: Joi.string().required()
    }),
    feelAwayFromFamily: Joi.string().min(2).required(),
    influencedRelationshipFamily: Joi.object().keys({
        answer: Joi.string().equal(['لا', 'نعم']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyServiceFeedback: Joi.object().keys({
        answer: Joi.string().equal(['سلبي', 'إيجابي']).required(),
        explanation: Joi.string().optional()
    }).required(),
    familyOpinionInfluencePerformance: Joi.object().keys({
        answer: Joi.string().equal(['سلبي', 'إيجابي']).required(),
        explanation: Joi.string().optional()
    }).required()
})
