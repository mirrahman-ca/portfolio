"use client";

import { useRef } from "react";
import QRCode from "react-qr-code";
import { profile } from "@/data/profile";

const vCard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Rahman;Mir Md Azizur;;;",
  "FN:Mir Md Azizur Rahman",
  `EMAIL;TYPE=INTERNET,WORK:${profile.email}`,
  `TEL;TYPE=CELL:${profile.phone}`,
  "URL:https://mirrahman.ca",
  "TITLE:Solutions Architect & Senior Software Engineer",
  "ADR;TYPE=WORK:;;Vancouver;BC;;;Canada",
  "END:VCARD",
].join("\n");

const vCardDownload = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;

export function ContactQr() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="button button-secondary" type="button" onClick={() => dialogRef.current?.showModal()}>
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="5" height="5" rx=".5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12.5" y="2.5" width="5" height="5" rx=".5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="2.5" y="12.5" width="5" height="5" rx=".5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12.5 12.5h2v2h-2v3h2M17.5 12.5v2M17.5 17.5h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Get in touch
      </button>

      <dialog
        ref={dialogRef}
        className="qr-dialog"
        aria-labelledby="qr-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="qr-dialog-card">
          <button className="qr-dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close contact QR code">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
          <p className="eyebrow">Contact card</p>
          <h2 id="qr-dialog-title">Scan to connect.</h2>
          <p className="qr-dialog-intro">Save Mir’s email, phone number, and website directly to your contacts.</p>
          <div className="qr-code-wrap">
            <QRCode value={vCard} size={220} level="M" bgColor="#ffffff" fgColor="#071426" title="Mir Md Azizur Rahman contact details" />
          </div>
          <p className="qr-dialog-help">Point your camera at the code and tap the contact prompt.</p>
          <div className="qr-divider"><span>or save on this device</span></div>
          <a className="qr-save-contact" href={vCardDownload} download="mir-rahman.vcf">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Save contact card
          </a>
          <p className="qr-save-help">On a phone, tap to open the contact card and add it directly.</p>
          <a className="qr-email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </dialog>
    </>
  );
}
