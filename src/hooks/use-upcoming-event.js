import { useStaticQuery, graphql } from 'gatsby';

/**
 * Get the data for next upcoming event from the meetup group.
 *
 * Returns `null` when no upcoming event.
 */
export function useUpcomingEvent() {
  const { meetupEvent } = useStaticQuery(graphql`
    {
      meetupEvent(status: { in: "upcoming" }) {
        name
        link
        isFull
        dateTime(formatString: "ddd, DD MMM YYYY h:mm A")
        info {
          schedule {
            time
            type
            desc
            talk {
              title
              description
              speaker {
                ...SpeakerCard
              }
            }
          }
          venue {
            name
            mapURL
          }
        }
        mapURL
        venue {
          name
        }
      }
    }
  `);

  if (!meetupEvent) {
    return null;
  }

  const { name, link, info, mapURL, venue, isFull, dateTime } = meetupEvent;
  const venueInfo = info && info.venue;

  return {
    name,
    dateTime,
    link,
    isFull,
    venue: {
      name: (venueInfo && venueInfo.name) || (venue && venue.name),
      mapURL: (venueInfo && venueInfo.mapURL) || mapURL,
    },
    schedule: info && info.schedule,
  };
}
