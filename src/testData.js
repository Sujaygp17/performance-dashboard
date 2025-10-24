// Test data based on the C# models structure
export const testData = {
  currentWeek: {
    periodType: "week",
    periodLabel: "Q4 Oct Week 4",
    year: "2025",
    periodIndex: "43",
    data: [
      {
        id: "us-total-w43",
        dg: "US Total",
        division: null,
        msa: null,
        pgEstimate: "12500",
        agencyEstimate: "8500",
        verticals: [
          {
            verticals: "Cardiology",
            pgaquisition: {
              tofuPgsCount: "450",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "92", goalValue: "490" },
              tofuPgtype: [
                { type: "Inbound", count: "280" },
                { type: "Outbound", count: "170" }
              ],
              mofuPgsCount: "320",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "88", goalValue: "365" },
              mofuPgtype: [
                { type: "Engaged", count: "200" },
                { type: "Qualified", count: "120" }
              ],
              bofuPgsCount: "180",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "95", goalValue: "190" },
              bofuPgtype: [
                { type: "Proposal", count: "110" },
                { type: "Negotiation", count: "70" }
              ],
              pilotPgsCount: "85",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "94", goalValue: "90" },
              onboardedPgsCount: "65",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "93", goalValue: "70" },
              percentOnboarded: "76",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "95", goalValue: "80" },
              dataCompleteness: "87",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "97", goalValue: "90" }
            },
            pgaquisitionPercentage: "36",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$125,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "104", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "8.5%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "106", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "12%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "92", goalValue: "10%" },
              percentCposBilledByThirdWeek: "78%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "97", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "85%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "94", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "62%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "88", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "68%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "91", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "45%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "90", goalValue: "50%" },
              proactiveReachoutsPerPg: "3.2",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "107", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "24",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "80", goalValue: "30" },
              avgTouchpointsPerPg: "5.8",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "97", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "36",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "88%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "98", goalValue: "90%" },
              hhahsWithEhrAccess: "156",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "93", goalValue: "168" },
              hhahsOnAutomationServices: "112",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "89", goalValue: "126" },
              percentProvidersOnDa: "66%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "94", goalValue: "70%" },
              proactiveReachoutsPerHhah: "2.8",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "93", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "18",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "90", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "22%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "88", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.5",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "90", goalValue: "5" },
              avgRelationshipHealthRapportScore: "8.2",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "91", goalValue: "9" },
              premiumHhahsCount: "89",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "89", goalValue: "100" },
              monthOverMonthGrowthPremiumUsers: "6.5%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "108", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "28"
          },
          {
            verticals: "Orthopedics",
            pgaquisition: {
              tofuPgsCount: "380",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "95", goalValue: "400" },
              tofuPgtype: [
                { type: "Inbound", count: "230" },
                { type: "Outbound", count: "150" }
              ],
              mofuPgsCount: "270",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "90", goalValue: "300" },
              mofuPgtype: [
                { type: "Engaged", count: "170" },
                { type: "Qualified", count: "100" }
              ],
              bofuPgsCount: "150",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "94", goalValue: "160" },
              bofuPgtype: [
                { type: "Proposal", count: "90" },
                { type: "Negotiation", count: "60" }
              ],
              pilotPgsCount: "72",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "96", goalValue: "75" },
              onboardedPgsCount: "55",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "92", goalValue: "60" },
              percentOnboarded: "76",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "95", goalValue: "80" },
              dataCompleteness: "85",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "94", goalValue: "90" }
            },
            pgaquisitionPercentage: "30",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$118,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "98", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "7.2%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "90", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "14%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "71", goalValue: "10%" },
              percentCposBilledByThirdWeek: "75%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "94", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "82%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "91", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "58%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "83", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "65%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "87", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "42%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "84", goalValue: "50%" },
              proactiveReachoutsPerPg: "3.0",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "100", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "28",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "93", goalValue: "30" },
              avgTouchpointsPerPg: "5.5",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "92", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "30",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "85%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "94", goalValue: "90%" },
              hhahsWithEhrAccess: "142",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "89", goalValue: "160" },
              hhahsOnAutomationServices: "98",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "82", goalValue: "120" },
              percentProvidersOnDa: "63%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "90", goalValue: "70%" },
              proactiveReachoutsPerHhah: "2.6",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "87", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "22",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "110", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "19%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "76", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.2",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "84", goalValue: "5" },
              avgRelationshipHealthRapportScore: "7.8",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "87", goalValue: "9" },
              premiumHhahsCount: "76",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "84", goalValue: "90" },
              monthOverMonthGrowthPremiumUsers: "5.8%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "97", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "24"
          },
          {
            verticals: "Neurology",
            pgaquisition: {
              tofuPgsCount: "290",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "91", goalValue: "320" },
              tofuPgtype: [
                { type: "Inbound", count: "180" },
                { type: "Outbound", count: "110" }
              ],
              mofuPgsCount: "200",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "87", goalValue: "230" },
              mofuPgtype: [
                { type: "Engaged", count: "125" },
                { type: "Qualified", count: "75" }
              ],
              bofuPgsCount: "110",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "92", goalValue: "120" },
              bofuPgtype: [
                { type: "Proposal", count: "68" },
                { type: "Negotiation", count: "42" }
              ],
              pilotPgsCount: "52",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "93", goalValue: "56" },
              onboardedPgsCount: "40",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "91", goalValue: "44" },
              percentOnboarded: "77",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "96", goalValue: "80" },
              dataCompleteness: "83",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "92", goalValue: "90" }
            },
            pgaquisitionPercentage: "23",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$132,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "110", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "9.1%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "114", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "10%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "100", goalValue: "10%" },
              percentCposBilledByThirdWeek: "82%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "103", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "88%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "98", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "70%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "100", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "72%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "96", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "51%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "102", goalValue: "50%" },
              proactiveReachoutsPerPg: "3.5",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "117", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "19",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "63", goalValue: "30" },
              avgTouchpointsPerPg: "6.2",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "103", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "23",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "91%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "101", goalValue: "90%" },
              hhahsWithEhrAccess: "128",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "91", goalValue: "140" },
              hhahsOnAutomationServices: "95",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "86", goalValue: "110" },
              percentProvidersOnDa: "69%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "99", goalValue: "70%" },
              proactiveReachoutsPerHhah: "3.1",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "103", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "15",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "75", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "26%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "104", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.8",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "96", goalValue: "5" },
              avgRelationshipHealthRapportScore: "8.5",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "94", goalValue: "9" },
              premiumHhahsCount: "68",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "85", goalValue: "80" },
              monthOverMonthGrowthPremiumUsers: "7.2%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "120", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "19"
          }
        ]
      }
    ]
  },
  previousWeek: {
    periodType: "week",
    periodLabel: "Q4 Oct Week 3",
    year: "2025",
    periodIndex: "42",
    data: [
      {
        id: "us-total-w42",
        dg: "US Total",
        division: null,
        msa: null,
        pgEstimate: "12200",
        agencyEstimate: "8300",
        verticals: [
          {
            verticals: "Cardiology",
            pgaquisition: {
              tofuPgsCount: "430",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "88", goalValue: "490" },
              tofuPgtype: [
                { type: "Inbound", count: "270" },
                { type: "Outbound", count: "160" }
              ],
              mofuPgsCount: "305",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "84", goalValue: "365" },
              mofuPgtype: [
                { type: "Engaged", count: "190" },
                { type: "Qualified", count: "115" }
              ],
              bofuPgsCount: "170",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "89", goalValue: "190" },
              bofuPgtype: [
                { type: "Proposal", count: "105" },
                { type: "Negotiation", count: "65" }
              ],
              pilotPgsCount: "80",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "89", goalValue: "90" },
              onboardedPgsCount: "62",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "89", goalValue: "70" },
              percentOnboarded: "78",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "98", goalValue: "80" },
              dataCompleteness: "85",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "94", goalValue: "90" }
            },
            pgaquisitionPercentage: "35",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$121,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "101", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "7.8%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "98", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "13%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "77", goalValue: "10%" },
              percentCposBilledByThirdWeek: "76%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "95", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "83%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "92", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "59%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "84", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "66%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "88", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "43%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "86", goalValue: "50%" },
              proactiveReachoutsPerPg: "3.0",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "100", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "26",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "87", goalValue: "30" },
              avgTouchpointsPerPg: "5.6",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "93", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "35",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "86%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "96", goalValue: "90%" },
              hhahsWithEhrAccess: "150",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "89", goalValue: "168" },
              hhahsOnAutomationServices: "108",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "86", goalValue: "126" },
              percentProvidersOnDa: "64%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "91", goalValue: "70%" },
              proactiveReachoutsPerHhah: "2.7",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "90", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "20",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "100", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "20%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "80", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.3",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "86", goalValue: "5" },
              avgRelationshipHealthRapportScore: "8.0",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "89", goalValue: "9" },
              premiumHhahsCount: "85",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "85", goalValue: "100" },
              monthOverMonthGrowthPremiumUsers: "6.0%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "100", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "30"
          },
          {
            verticals: "Orthopedics",
            pgaquisition: {
              tofuPgsCount: "370",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "93", goalValue: "400" },
              tofuPgtype: [
                { type: "Inbound", count: "220" },
                { type: "Outbound", count: "150" }
              ],
              mofuPgsCount: "260",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "87", goalValue: "300" },
              mofuPgtype: [
                { type: "Engaged", count: "165" },
                { type: "Qualified", count: "95" }
              ],
              bofuPgsCount: "145",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "91", goalValue: "160" },
              bofuPgtype: [
                { type: "Proposal", count: "88" },
                { type: "Negotiation", count: "57" }
              ],
              pilotPgsCount: "68",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "91", goalValue: "75" },
              onboardedPgsCount: "52",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "87", goalValue: "60" },
              percentOnboarded: "76",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "95", goalValue: "80" },
              dataCompleteness: "83",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "92", goalValue: "90" }
            },
            pgaquisitionPercentage: "30",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$116,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "97", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "6.8%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "85", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "15%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "67", goalValue: "10%" },
              percentCposBilledByThirdWeek: "73%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "91", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "80%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "89", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "56%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "80", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "63%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "84", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "40%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "80", goalValue: "50%" },
              proactiveReachoutsPerPg: "2.9",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "97", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "30",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "100", goalValue: "30" },
              avgTouchpointsPerPg: "5.3",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "88", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "30",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "83%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "92", goalValue: "90%" },
              hhahsWithEhrAccess: "138",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "86", goalValue: "160" },
              hhahsOnAutomationServices: "94",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "78", goalValue: "120" },
              percentProvidersOnDa: "61%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "87", goalValue: "70%" },
              proactiveReachoutsPerHhah: "2.5",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "83", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "24",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "120", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "18%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "72", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.0",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "80", goalValue: "5" },
              avgRelationshipHealthRapportScore: "7.6",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "84", goalValue: "9" },
              premiumHhahsCount: "72",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "80", goalValue: "90" },
              monthOverMonthGrowthPremiumUsers: "5.5%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "92", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "25"
          },
          {
            verticals: "Neurology",
            pgaquisition: {
              tofuPgsCount: "280",
              tofuPgsGoal: { goalTitle: "TOFU Goal", percentOfGoalCompletion: "88", goalValue: "320" },
              tofuPgtype: [
                { type: "Inbound", count: "175" },
                { type: "Outbound", count: "105" }
              ],
              mofuPgsCount: "195",
              mofuPgsGoal: { goalTitle: "MOFU Goal", percentOfGoalCompletion: "85", goalValue: "230" },
              mofuPgtype: [
                { type: "Engaged", count: "120" },
                { type: "Qualified", count: "75" }
              ],
              bofuPgsCount: "105",
              bofuPgsGoal: { goalTitle: "BOFU Goal", percentOfGoalCompletion: "88", goalValue: "120" },
              bofuPgtype: [
                { type: "Proposal", count: "65" },
                { type: "Negotiation", count: "40" }
              ],
              pilotPgsCount: "49",
              pilotPgsGoal: { goalTitle: "Pilot Goal", percentOfGoalCompletion: "88", goalValue: "56" },
              onboardedPgsCount: "38",
              onboardedPgsGoal: { goalTitle: "Onboarded Goal", percentOfGoalCompletion: "86", goalValue: "44" },
              percentOnboarded: "78",
              percentOnboardedGoal: { goalTitle: "% Onboarded Goal", percentOfGoalCompletion: "98", goalValue: "80" },
              dataCompleteness: "81",
              dataCompletenessGoal: { goalTitle: "Data Completeness Goal", percentOfGoalCompletion: "90", goalValue: "90" }
            },
            pgaquisitionPercentage: "23",
            pgCustomerSuccess: {
              averageCpoRevenuePerPg: "$128,000",
              averageCpoRevenuePerPgGoal: { goalTitle: "Avg CPO Revenue Goal", percentOfGoalCompletion: "107", goalValue: "$120,000" },
              monthOverMonthCpoRevenueGrowth: "8.5%",
              monthOverMonthCpoRevenueGrowthGoal: { goalTitle: "MoM Growth Goal", percentOfGoalCompletion: "106", goalValue: "8%" },
              percentCposUnbilledAtEndOfEpisode: "11%",
              percentCposUnbilledAtEndOfEpisodeGoal: { goalTitle: "Unbilled EOE Goal", percentOfGoalCompletion: "91", goalValue: "10%" },
              percentCposBilledByThirdWeek: "80%",
              percentCposBilledByThirdWeekGoal: { goalTitle: "Billed by Week 3 Goal", percentOfGoalCompletion: "100", goalValue: "80%" },
              percentPgsWithActiveEhrAccess: "86%",
              percentPgsWithActiveEhrAccessGoal: { goalTitle: "EHR Access Goal", percentOfGoalCompletion: "96", goalValue: "90%" },
              percentPgsLeveragingRpaDocAutomation: "68%",
              percentPgsLeveragingRpaDocAutomationGoal: { goalTitle: "RPA Automation Goal", percentOfGoalCompletion: "97", goalValue: "70%" },
              percentPgsUsingDaBillingServices: "70%",
              percentPgsUsingDaBillingServicesGoal: { goalTitle: "DA Billing Goal", percentOfGoalCompletion: "93", goalValue: "75%" },
              percentPgsEnrolledInCpoPlusAdditionalServices: "49%",
              percentPgsEnrolledInCpoPlusAdditionalServicesGoal: { goalTitle: "CPO+ Services Goal", percentOfGoalCompletion: "98", goalValue: "50%" },
              proactiveReachoutsPerPg: "3.3",
              proactiveReachoutsPerPgGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "110", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "21",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "70", goalValue: "30" },
              avgTouchpointsPerPg: "6.0",
              avgTouchpointsPerPgGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "100", goalValue: "6" }
            },
            pgCustomerSuccessPercentage: "23",
            hhahSalesValue: {
              percentEpisodesBilledByEoe: "89%",
              percentEpisodesBilledByEoeGoal: { goalTitle: "Episodes Billed EOE Goal", percentOfGoalCompletion: "99", goalValue: "90%" },
              hhahsWithEhrAccess: "124",
              hhahsWithEhrAccessGoal: { goalTitle: "HHAHs EHR Access Goal", percentOfGoalCompletion: "89", goalValue: "140" },
              hhahsOnAutomationServices: "92",
              hhahsOnAutomationServicesGoal: { goalTitle: "Automation Services Goal", percentOfGoalCompletion: "84", goalValue: "110" },
              percentProvidersOnDa: "67%",
              percentProvidersOnDaGoal: { goalTitle: "Providers on DA Goal", percentOfGoalCompletion: "96", goalValue: "70%" },
              proactiveReachoutsPerHhah: "3.0",
              proactiveReachoutsPerHhahGoal: { goalTitle: "Proactive Reachouts Goal", percentOfGoalCompletion: "100", goalValue: "3" },
              reactiveOutcomeTicketsReceived: "17",
              reactiveOutcomeTicketsReceivedGoal: { goalTitle: "Reactive Tickets Goal", percentOfGoalCompletion: "85", goalValue: "20" },
              percentMovedFreemiumToDaDirect: "24%",
              percentMovedFreemiumToDaDirectGoal: { goalTitle: "Freemium to DA Goal", percentOfGoalCompletion: "96", goalValue: "25%" },
              avgTouchpointsPerHhah: "4.6",
              avgTouchpointsPerHhahGoal: { goalTitle: "Avg Touchpoints Goal", percentOfGoalCompletion: "92", goalValue: "5" },
              avgRelationshipHealthRapportScore: "8.3",
              avgRelationshipHealthRapportScoreGoal: { goalTitle: "Relationship Health Goal", percentOfGoalCompletion: "92", goalValue: "9" },
              premiumHhahsCount: "65",
              premiumHhahsCountGoal: { goalTitle: "Premium HHAHs Goal", percentOfGoalCompletion: "81", goalValue: "80" },
              monthOverMonthGrowthPremiumUsers: "6.8%",
              monthOverMonthGrowthPremiumUsersGoal: { goalTitle: "MoM Premium Growth Goal", percentOfGoalCompletion: "113", goalValue: "6%" }
            },
            hhahSalesValuePercentage: "20"
          }
        ]
      }
    ]
  },
  hierarchy: {
    "US Total": {
      "East": {
        divisions: ["Northeast", "Southeast"],
        msas: {
          "Northeast": ["New York-Newark-Jersey City, NY-NJ-PA", "Boston-Cambridge-Newton, MA-NH", "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD"],
          "Southeast": ["Atlanta-Sandy Springs-Roswell, GA", "Miami-Fort Lauderdale-West Palm Beach, FL", "Washington-Arlington-Alexandria, DC-VA-MD-WV"]
        }
      },
      "West": {
        divisions: ["Pacific", "Mountain"],
        msas: {
          "Pacific": ["Los Angeles-Long Beach-Anaheim, CA", "San Francisco-Oakland-Hayward, CA", "Seattle-Tacoma-Bellevue, WA"],
          "Mountain": ["Phoenix-Mesa-Scottsdale, AZ", "Denver-Aurora-Lakewood, CO", "Las Vegas-Henderson-Paradise, NV"]
        }
      },
      "Central": {
        divisions: ["Midwest", "South Central"],
        msas: {
          "Midwest": ["Chicago-Naperville-Elgin, IL-IN-WI", "Detroit-Warren-Dearborn, MI", "Minneapolis-St. Paul-Bloomington, MN-WI"],
          "South Central": ["Dallas-Fort Worth-Arlington, TX", "Houston-The Woodlands-Sugar Land, TX", "San Antonio-New Braunfels, TX"]
        }
      }
    }
  },
  verticalOptions: [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Neurology", label: "Neurology" },
    { value: "Pulmonology", label: "Pulmonology" },
    { value: "Oncology", label: "Oncology" }
  ]
};
