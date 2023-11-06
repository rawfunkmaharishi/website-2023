import moment from "moment";
import { futureGigs } from "../../lib/tools";

const boilerPlate = String.raw`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//import.meta.env.SITE//
X-WR-CALNAME:Raw Funk Maharishi Gigs
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/London
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/London
X-LIC-LOCATION:Europe/London
BEGIN:DAYLIGHT
TZOFFSETFROM:+0000
TZOFFSETTO:+0100
TZNAME:BST
DTSTART:19700329T010000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0100
TZOFFSETTO:+0000
TZNAME:GMT
DTSTART:19701025T020000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
`.replaceAll('"', "");

const tail = String.raw`
END:VCALENDAR
`;

export async function get() {
  const gigs = await futureGigs().then(function (gigs) {
    return gigs.map(function (gig) {
      return gig;
    });
  });

  return {
    body: (boilerPlate + gigs.map(iCalEvent).join("\n") + tail).replaceAll(
      "\n",
      "\r\n"
    ),
  };
}

function iCalEvent(gig) {
  const dateFormat = "YYYYMMDDTHHmmss";
  const nativeDate = new Date(gig.startDate);
  const start = moment(nativeDate).format(dateFormat);
  nativeDate.setHours(nativeDate.getHours() + 2);
  const end = moment(nativeDate).format(dateFormat);

  var event = "BEGIN:VEVENT\n";

  event += "UID:";
  event += start;
  event += "@rawfunkmaharishi.uk\n";

  event += "DTSTART;TZID=Europe/London:";
  event += start;
  event += "\n";

  event += "DTSTAMP;TZID=Europe/London:";
  event += start;
  event += "\n";

  event += "DTEND;TZID=Europe/London:";
  event += end;
  event += "\n";

  event += "SUMMARY:Raw Funk Maharishi live at ";
  event += gig.location.name;
  event += "\n";

  event += "DESCRIPTION:Raw Funk Maharishi live at ";
  event += gig.location.name;
  event += "\n";

  event += "LOCATION:";
  event += gig.location.name + ", " + gig.location.address.streetAddress;
  event += "\n";

  event += "GEO:";
  event += gig.location.geo.latitude;
  event += ";";
  event += gig.location.geo.longitude;
  event += "\n";

  event += "END:VEVENT";

  return event;
}
