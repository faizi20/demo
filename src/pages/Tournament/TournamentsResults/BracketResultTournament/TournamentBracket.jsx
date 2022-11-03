import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';
import UserProfile from '../../../../assets/img/r2.png';

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam className="text-start">
            <div className="d-flex align-items-center">
              <div className="inner_result_bracket_match">
                <img
                  src={UserProfile}
                  alt=""
                  className="result_button_profile"
                />
                <label>{seed.teams[0]?.name || 'NO TEAM '}</label>
              </div>
            </div>

            <h1 className="primary_heading countx">50</h1>
          </SeedTeam>
          <SeedTeam className="text-start">
            <div className="d-flex align-items-center">
              <div className="inner_result_bracket_match">
                <img
                  src={UserProfile}
                  alt=""
                  className="result_button_profile"
                />
                <label>{seed.teams[1]?.name || 'NO TEAM '}</label>
              </div>
            </div>
            <h1 className="primary_heading countx">20</h1>
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const TournamentBracket = () => {
  const rounds = [
    {
      title: 'Round 1',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Round 2',
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
  ];
  // const rounds: RoundProps[] = [
  //   {
  //     title: "Round 1",
  //     seeds: [
  //       {
  //         id: 1,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team B" }],
  //       },
  //       {
  //         id: 2,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team C" }, { name: "Team D" }],
  //       },
  //       {
  //         id: 3,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team E" }, { name: "Team F" }],
  //       },
  //       {
  //         id: 4,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team G" }, { name: "Team H" }],
  //       },

  //       {
  //         id: 5,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team J" }],
  //       },
  //       {
  //         id: 6,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team K" }, { name: "Team L" }],
  //       },
  //       {
  //         id: 7,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team M" }, { name: "Team N" }],
  //       },
  //       {
  //         id: 8,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team O" }, { name: "Team P" }],
  //       },
  //       {
  //         id: 9,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team R" }],
  //       },
  //       {
  //         id: 10,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team S" }, { name: "Team T" }],
  //       },
  //       ,
  //       {
  //         id: 11,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team U" }, { name: "Team V" }],
  //       },
  //       {
  //         id: 12,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team W" }, { name: "Team X" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Round 2",
  //     seeds: [
  //       {
  //         id: 13,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team C" }],
  //       },
  //       {
  //         id: 14,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team E" }, { name: "Team G" }],
  //       },
  //       {
  //         id: 15,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team K" }],
  //       },
  //       {
  //         id: 16,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team M" }, { name: "Team O" }],
  //       },
  //       {
  //         id: 17,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 18,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 19,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 20,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Round 3",
  //     seeds: [
  //       {
  //         id: 21,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team G" }],
  //       },
  //       {
  //         id: 22,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //       {
  //         id: 23,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 24,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 25,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //       {
  //         id: 26,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team Q" }, { name: "Team S" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "QUARTER FINALS",
  //     seeds: [
  //       {
  //         id: 27,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team G" }],
  //       },
  //       {
  //         id: 28,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //       {
  //         id: 29,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //       {
  //         id: 30,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "SEMI FINALS",
  //     seeds: [
  //       {
  //         id: 31,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team G" }],
  //       },
  //       {
  //         id: 32,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //       {
  //         id: 33,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //       {
  //         id: 34,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "FINAL",
  //     seeds: [
  //       {
  //         id: 35,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team A" }, { name: "Team G" }],
  //       },
  //       {
  //         id: 36,
  //         date: new Date().toDateString(),
  //         teams: [{ name: "Team I" }, { name: "Team M" }],
  //       },
  //     ],
  //   },
  // ];

  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};

export default TournamentBracket;
