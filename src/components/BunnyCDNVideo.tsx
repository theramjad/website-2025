"use client";

export interface BunnyCDNVideoProps {
  /** The BunnyCDN library ID */
  libraryId: string;
  /** The BunnyCDN stream ID for the video */
  streamId: string;
  /** Enable autoplay (default: false) */
  autoplay?: boolean;
  /** Enable loop (default: false) */
  loop?: boolean;
  /** Mute the video (default: false) */
  muted?: boolean;
  /** Preload the video (default: true) */
  preload?: boolean;
  /** Make the video responsive (default: true) */
  responsive?: boolean;
  /** Additional CSS classes for the wrapper div */
  className?: string;
  /** Aspect ratio padding-top percentage (default: 56.25% for 16:9) */
  aspectRatio?: string;
}

export const BunnyCDNVideo = ({
  libraryId,
  streamId,
  autoplay = false,
  loop = false,
  muted = false,
  preload = true,
  responsive = true,
  className = "",
  aspectRatio = "56.25%",
}: BunnyCDNVideoProps) => {
  const iframeUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${streamId}?autoplay=${autoplay}&loop=${loop}&muted=${muted}&preload=${preload}&responsive=${responsive}`;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        paddingTop: aspectRatio,
      }}
    >
      <iframe
        src={iframeUrl}
        loading="lazy"
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
};
