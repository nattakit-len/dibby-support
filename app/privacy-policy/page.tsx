export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed">
            This privacy policy applies to the Dibby app (hereby referred to as
            "Application") for mobile devices that was created by Nattakit
            Lensin (hereby referred to as "Service Provider") as a Freemium
            service. This service is intended for use "AS IS".
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Information Collection and Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Collection and Use
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Application collects information when you download and use it.
              This information may include information such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
              <li>
                Identifiers used for advertising and analytics (e.g., Device ID,
                Advertising ID)
              </li>
            </ul>
          </section>

          {/* Authentication Methods */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Authentication Methods
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Application offers multiple authentication methods to provide
              you with convenient and secure sign-in options.
            </p>

            {/* Google Sign-In */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Google Sign-In
              </h4>
              <p className="text-gray-600 mb-3 leading-relaxed">
                When you sign in with Google, we collect and process the
                following information from your Google account:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-3">
                <li>
                  <strong className="text-gray-800">Name</strong>: Your full
                  name as registered with Google
                </li>
                <li>
                  <strong className="text-gray-800">Email Address</strong>: Your
                  Google email address
                </li>
                <li>
                  <strong className="text-gray-800">Profile Picture</strong>:
                  Your Google profile photo (if available)
                </li>
                <li>
                  <strong className="text-gray-800">Google User ID</strong>: A
                  unique identifier for your Google account
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can revoke the Application's access to your Google account
                at any time through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Account Settings
                </a>
                .
              </p>
            </div>

            {/* Apple Sign-In */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Apple Sign-In
              </h4>
              <p className="text-gray-600 mb-3 leading-relaxed">
                When you sign in with Apple, we collect and process the
                following information from your Apple ID:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-3">
                <li>
                  <strong className="text-gray-800">Name</strong>: Your full
                  name as registered with Apple (optional, you can choose to
                  share or hide)
                </li>
                <li>
                  <strong className="text-gray-800">Email Address</strong>: Your
                  Apple ID email or a private relay email address if you choose
                  to hide your email
                </li>
                <li>
                  <strong className="text-gray-800">Apple User ID</strong>: A
                  unique identifier for your Apple account
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                Apple Sign-In provides additional privacy features, including
                the option to hide your email address by using Apple's private
                relay service, which creates a unique, random email address that
                forwards to your real email.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can manage or revoke the Application's access to your Apple
                ID at any time through your{" "}
                <a
                  href="https://appleid.apple.com/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Apple ID Settings
                </a>{" "}
                under "Sign-In with Apple".
              </p>
            </div>

            {/* Common Usage */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2 leading-relaxed font-semibold">
                This authentication information is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Create and manage your user account</li>
                <li>Personalize your experience within the Application</li>
                <li>
                  Communicate with you regarding your account and Application
                  updates
                </li>
                <li>Verify your identity and maintain account security</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Important</strong>: The
                Application only requests access to basic profile information
                for authentication purposes. We do not access your email
                content, cloud storage (Google Drive, iCloud), or other services
                beyond the authentication data. Your account passwords are never
                shared with or stored by the Application. All authentication is
                securely handled by Google and Apple's infrastructure.
              </p>
            </div>
          </section>

          {/* Location Data */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Location Data
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Application collects your device's approximate location
              (derived from IP address or other non-precise methods), which
              helps the Service Provider determine your approximate geographical
              location and make use of in below ways:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="text-gray-600">
                <strong className="text-gray-800">Geolocation Services</strong>:
                The Service Provider utilizes approximate location data to
                provide features such as personalized content, relevant
                recommendations, and location-based services.
              </li>
              <li className="text-gray-600">
                <strong className="text-gray-800">
                  Analytics and Improvements
                </strong>
                : Aggregated and anonymized location data helps the Service
                Provider to analyze user behavior, identify trends, and improve
                the overall performance and functionality of the Application.
              </li>
              <li className="text-gray-600">
                <strong className="text-gray-800">Third-Party Services</strong>:
                Periodically, the Service Provider may transmit approximate
                location data to external services. These services assist them
                in enhancing the Application and optimizing their offerings.
              </li>
            </ul>
          </section>

          {/* Marketing Communications */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Marketing Communications
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Service Provider may use the information you provided to
              contact you from time to time to provide you with important
              information, required notices and marketing promotions.
            </p>
          </section>

          {/* Personal Information */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For a better experience, while using the Application, the Service
              Provider may require you to provide us with certain personally
              identifiable information, including but not limited to Name, Email
              Address, Photo/Image, and associated Log Data. The information
              that the Service Provider requests will be retained by them and
              used as described in this privacy policy.
            </p>
          </section>

          {/* Third Party Access */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third Party Access and Data Sharing
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We share your information with third parties in the ways that are
              described in this privacy statement. We may share certain data,
              including identifiers such as Device ID and usage data, with
              third-party providers for advertising, analytics, and service
              functionality.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Please note that the Application utilizes third-party services
              that have their own Privacy Policy about handling data. These
              services may collect, use, and share your data for purposes
              including but not limited to serving advertisements and providing
              analytics services. Below are the links to the Privacy Policy of
              the third-party service providers used by the Application:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Sign-In
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Apple Sign-In
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  AdMob
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/policies/analytics"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/about/privacy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.revenuecat.com/privacy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  RevenueCat
                </a>
              </li>
            </ul>
            <p className="text-gray-600 mb-2 leading-relaxed">
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </li>
            </ul>
          </section>

          {/* Data Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Rights and Opt-Out
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
              <li>Request access to your Personal Data</li>
              <li>Request correction of your Personal Data</li>
              <li>Request deletion of your Personal Data</li>
              <li>
                Revoke Google Sign-In permissions through your Google Account
                Settings
              </li>
              <li>
                Revoke Apple Sign-In permissions through your Apple ID Settings
              </li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you'd like them to delete User Provided Data that you have
              provided via the Application, please contact them at{" "}
              <a
                href="mailto:nattakit.len@icloud.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                nattakit.len@icloud.com
              </a>{" "}
              and they will respond in a reasonable time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In
              the case the Service Provider discovers that a child under 13 has
              provided personal information, the Service Provider will
              immediately delete this from their servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact the Service Provider (
              <a
                href="mailto:nattakit.len@icloud.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                nattakit.len@icloud.com
              </a>
              ) so that they will be able to take the necessary actions.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When you use Google Sign-In or Apple Sign-In, your authentication
              is handled securely by Google's and Apple's infrastructure
              respectively. The Application only receives authentication tokens
              and does not have access to your Google or Apple account password.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              For changes that materially affect your rights or the way we
              process data, we may choose to notify you directly, such as via
              email or an in-app notice. You are advised to consult this Privacy
              Policy regularly for any changes, as continued use is deemed
              approval of all changes.
            </p>
            <p className="text-sm text-gray-500 italic">
              This privacy policy is effective as of 2025-11-09
            </p>
          </section>

          {/* Your Consent */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Consent
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us. By signing in with Google or Apple, you authorize
              the Application to access and use your basic profile information
              as described in this policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at{" "}
              <a
                href="mailto:nattakit.len@icloud.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                nattakit.len@icloud.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Dibby. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
