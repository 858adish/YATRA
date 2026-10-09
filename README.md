# Yatra · Delhi NCR public transport planner

Yatra plans trips using the included Delhi bus and DMRC static GTFS feeds, plus DMRC station gate locations. It runs locally and does not need an API key for transit search or routing.

## Start

1. Install Node.js 18 or newer.
2. Run `start-yatra.bat`.
3. Open `http://127.0.0.1:4173`.

Choose both places from the suggestions, select Bus, Metro, or Bus + Metro, then choose **Find routes**. Suggestions include the supplied Delhi NCR bus stops, Metro stops, and station gates. Nearby stops are connected by estimated walking access legs.

## Data and limits

- `transit-data/transit-network.json` is generated from the supplied bus and DMRC GTFS archives and the DMRC station/gate workbook.
- Bus travel times and service patterns are static-feed estimates. No live arrivals, cancellations, traffic, or service alerts are available.
- The supplied Metro feed is older than the bus feed; verify current service before travelling.
- Routes are calculated locally from stop-to-stop GTFS segments. The planner reports no itinerary when the supplied feed has no connecting route.
- Map tiles require an internet connection; route search itself works offline once the app is running.
