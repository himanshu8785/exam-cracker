export const plans = {

  FREE: {

    name:"FREE",

    tests:3,

    notes:false,

    analytics:false,

    leaderboard:false,

    ai:false

  },

  BASIC: {

    name:"BASIC",

    price:19,

    tests:10,

    notes:true,

    analytics:false,

    leaderboard:false,

    ai:false

  },

  PRO: {

    name:"PRO",

    price:49,

    tests:50,

    notes:true,

    analytics:true,

    leaderboard:true,

    ai:false

  },

  ELITE: {

    name:"ELITE",

    price:299,

    tests:9999,

    notes:true,

    analytics:true,

    leaderboard:true,

    ai:true

  }

};

/* CURRENT USER PLAN */

export const currentUserPlan =
"FREE";

/* ACCESS CHECK FUNCTION */

export function hasAccess(

  feature:string

){

  const userPlan =
  plans[
    currentUserPlan as keyof typeof plans
  ];

  switch(feature){

    case "notes":

      return userPlan.notes;

    case "analytics":

      return userPlan.analytics;

    case "leaderboard":

      return userPlan.leaderboard;

    case "ai":

      return userPlan.ai;

    default:

      return false;

  }

}