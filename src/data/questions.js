const quizData = {
  components: [
    {
      id: "c1",
      name: "Project Sustainability Characteristics",
      weight: 0.15,
      questions: [
        {
          id: "q1_1",
          text: "Do you have a sustainability rating target?",
          weight: 0.26,
          recommendation: "Consider targeting a BEAM Plus rating (e.g. silver, gold, platinum) to guide sustainable delivery "
        },
        {
          id: "q1_2",
          text: "Are there repetitive designs and data management requirements?",
          weight: 0.24,
          recommendation: "Consider designing various floors to be repetitive to facilitate off-site manufacturing or adopt in-situ construction"
        },
        {
          id: "q1_3",
          text: "Are there plans for adapting and repurposing the building in the future?",
          weight: 0.24,
          recommendation: "Consider designing a future adaptation plan to guide future dissassembly and repurposing. "
        },
        {
          id: "q1_4",
          text: "Does the project budget exceed HKD 30 million?",
          weight: 0.26,
          recommendation: "Consider conducting a lifecycle costing of the building with a cost-benefit analysis. If cost outweighs benefits beyond a 10-year period, consider alternative methods of delivery "
        }
      ]
    },
    {
      id: "c2",
      name: "Industry Culture and Project Expectations",
      weight: 0.20,
      questions: [
        {
          id: "q2_1",
          text: "Is the collaborative culture of the industry ripe? ",
          weight: 0.20,
          recommendation: "Consider forming a partnership with an experienced firm with IDD experience to gain first-hand knowledge before proceeding"
        },
        {
          id: "q2_2",
          text: "Do you desire accurate cost prediction of the project lifecycle?",
          weight: 0.20,
          recommendation: "Prioritize the cost prediction of the project"
        },
        {
          id: "q2_3",
          text: "Do you desire accurate risk prediction of the project lifecycle?",
          weight: 0.21,
          recommendation: "Prioritize the risk prediction of the project"
        },
        {
          id: "q2_4",
          text: "Does the project require multiple design iterations from multiple stakeholders? ",
          weight: 0.20,
          recommendation: "Consider conducting a lifecycle costing of the building with a cost-benefit analysis. If cost outweighs benefits beyond a 10-year period, consider alternative methods of delivery "
        },
        {
          id: "q2_5",
          text: "Is your project beyond 8 storeys in height and involve multiple stakeholders? ",
          weight: 0.19,
          recommendation: "A cost-benefit analysis is recommended before adopting IDD "
        }
      ]
    },
    {
      id: "c3",
      name: "Project standards and organisational factors",
      weight: 0.17,
      questions: [
        {
          id: "q3_1",
          text: "Is it a client requirement?",
          weight: 0.26,
          recommendation: "Consider involving the client in the decision to adopt IDD "
        },
        {
          id: "q3_2",
          text: "Does the project have a clearly defined quality target and waste management plan?",
          weight: 0.25,
          recommendation: "Consider incorporating a sustainability rating target to guide quality and waste measurement "
        },
        {
          id: "q3_3",
          text: "Does top management support the IDD idea?",
          weight: 0.25,
          recommendation: "Consider consulting top level management and gaining approval before proceeding "
        },
        {
          id: "q3_4",
          text: "Do you desire real-time safety management?",
          weight: 0.24,
          recommendation: "Prioritize the safety prediction of the project"
        }
      ]
    },
    {
      id: "c4",
      name: "Project requirements and capacity",
      weight: 0.16,
      questions: [
        {
          id: "q4_1",
          text: "Has the project contract been customised to accommodate the unfamiliar conditions associated with IDD adoption?",
          weight: 0.26,
          recommendation: "Consider amending contract documents with parties involved to incorporate peculiar risks associated with IDD"
        },
        {
          id: "q4_2",
          text: "Do you want to minimize energy consumption?",
          weight: 0.27,
          recommendation: "Consider incorporating a sustainability rating target to measure the extent of energy efficiency on the project"
        },
        {
          id: "q4_3",
          text: "Does your organisation have the technology infrastructure to support IDD?",
          weight: 0.26,
          recommendation: "Consider improving technology infrastructure with digital tools aligned with IDD or partner with a well-resourced institution to make use of their resources "
        },
        {
          id: "q4_4",
          text: "Are there plans to create storage facilities to accommodate modular units?",
          weight: 0.21,
          recommendation: "Make site allocations for storage facilities for modular units "
        }
      ]
    },
    {
      id: "c5",
      name: "Human resource factors",
      weight: 0.08,
      questions: [
        {
          id: "q5_1",
          text: "Have IDD experts been consulted and incorporated into the project planning and execution process?",
          weight: 0.50,
          recommendation: "Consider engaging IDD experts from an experienced institution both within and outside Hong Kong"
        },
        {
          id: "q5_2",
          text: "Have considerations been made for labour that is skilled in executing IDD projects?",
          weight: 0.50,
          recommendation: "Consider engaging labour experienced in IDD from within and outside Hong Kong or train local labour before proceeding "
        },
      ]
    },
    {
      id: "c6",
      name: "Statutory and project duration factors",
      weight: 0.08,
      questions: [
        {
          id: "q6_1",
          text: "Do you prioritize completing the project as scheduled?",
          weight: 0.52,
          recommendation: "Kindly consider alternative delivery methods if you have the luxury of time"
        },
        {
          id: "q6_2",
          text: "Are you considering consulting regulatory authorities at the design and planning phases?",
          weight: 0.48,
          recommendation: "Consider consulting necessary regulatory authorities for guidelines to adopting IDD for a project in Hong Kong "
        },
      ]
    },
    {
      id: "c7",
      name: "Process and resource supply factors",
      weight: 0.08,
      questions: [
        {
          id: "q7_1",
          text: "Are there modular unit manufacturers in Hong Kong?",
          weight: 0.50,
          recommendation: "Consider contacting modular fabricators overseas at the earliest stages to ascertain their availability "
        },
        {
          id: "q7_2",
          text: "Have you identified suppliers and vendors in Hong Kong with the capacity to provide the requisite product and services?",
          weight: 0.50,
          recommendation: "Consider undertaking a market survey to identify potential suppliers and vendors both within and outside Hong Kong"
        },
      ]
    },
    {
      id: "c8",
      name: "Stakeholder support factors",
      weight: 0.04,
      questions: [
        {
          id: "q8_1",
          text: "Do you have the support of local stakeholders?",
          weight: 1.00,
          recommendation: "Assess the social and economic reception of local stakeholders to IDD before proceeding "
        }
      ]
    },
    {
      id: "c9",
      name: "Project safety factors",
      weight: 0.04,
      questions: [
        {
          id: "q9_1",
          text: "Do you have a safety target for your project?",
          weight: 1.00,
          recommendation: "Prioritize site health and safety in design and construction before proceeding "
        }
      ]
    }
  ]
};

// Flatten questions for easier navigation
const flattenedQuestions = quizData.components.flatMap(component => 
  component.questions.map(question => ({
    ...question,
    componentId: component.id,
    componentName: component.name,
    componentWeight: component.weight
  }))
);

export { quizData, flattenedQuestions };
